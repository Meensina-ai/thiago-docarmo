/**
 * MCP server custom para pipeline construcao/landscape.
 *
 * Tools expostos:
 *   - ghl.*   (GoHighLevel CRM)
 *   - qb.*    (QuickBooks invoicing/payment)
 *   - gcal.*  (Google Calendar scheduling)
 *
 * Stack: Node 20+ TS, @modelcontextprotocol/sdk, zod.
 *
 * Status: esqueleto inicial (semana 1). Implementacao real
 * dos handlers acontece sob demanda quando o pipeline real
 * comecar a operar (lead → estimate → invoice).
 */

import { Server } from "@modelcontextprotocol/sdk/server/index.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import {
  CallToolRequestSchema,
  ListToolsRequestSchema,
} from "@modelcontextprotocol/sdk/types.js";
import { z } from "zod";

import { registerGhlTools, ghlHandlers } from "./ghl.js";
import { registerQbTools, qbHandlers } from "./qb.js";
import { registerGcalTools, gcalHandlers } from "./gcal.js";

const server = new Server(
  {
    name: "construcao-landscape-mcp",
    version: "0.1.0",
  },
  {
    capabilities: {
      tools: {},
    },
  }
);

const allTools = [
  ...registerGhlTools(),
  ...registerQbTools(),
  ...registerGcalTools(),
];

const allHandlers: Record<
  string,
  (args: unknown) => Promise<unknown>
> = {
  ...ghlHandlers,
  ...qbHandlers,
  ...gcalHandlers,
};

server.setRequestHandler(ListToolsRequestSchema, async () => ({
  tools: allTools,
}));

server.setRequestHandler(CallToolRequestSchema, async (request) => {
  const { name, arguments: args } = request.params;
  const handler = allHandlers[name];
  if (!handler) {
    throw new Error(`Unknown tool: ${name}`);
  }
  const result = await handler(args ?? {});
  return {
    content: [
      {
        type: "text",
        text: JSON.stringify(result, null, 2),
      },
    ],
  };
});

const transport = new StdioServerTransport();
await server.connect(transport);
