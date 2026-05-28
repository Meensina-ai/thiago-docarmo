/**
 * Tools GoHighLevel — esqueleto.
 *
 * Implementacao real conecta com API v2 do GHL (api.gohighlevel.com/v2/).
 * Variaveis de env necessarias: GHL_API_KEY, GHL_LOCATION_ID.
 *
 * Cada handler retorna stub estruturado por enquanto. Quando o pipeline
 * real comecar (semana 1 pos-kickoff), substituir os stubs por fetch reais.
 */

import { z } from "zod";

const CreateContact = z.object({
  name: z.string(),
  phone: z.string().optional(),
  email: z.string().email().optional(),
  tags: z.array(z.string()).optional(),
});

const AddTag = z.object({
  contactId: z.string(),
  tag: z.string(),
});

const CreateOpportunity = z.object({
  contactId: z.string(),
  pipelineId: z.string(),
  stageId: z.string(),
  value: z.number().positive(),
});

const MoveStage = z.object({
  opportunityId: z.string(),
  toStageId: z.string(),
});

const TriggerWorkflow = z.object({
  contactId: z.string(),
  workflowId: z.string(),
});

export function registerGhlTools() {
  return [
    {
      name: "ghl.contact.create",
      description:
        "Cria contato no GoHighLevel CRM. Use quando lead novo entra (telefone/WhatsApp/email).",
      inputSchema: {
        type: "object",
        properties: {
          name: { type: "string" },
          phone: { type: "string" },
          email: { type: "string" },
          tags: { type: "array", items: { type: "string" } },
        },
        required: ["name"],
      },
    },
    {
      name: "ghl.contact.add_tag",
      description: "Adiciona tag em contato existente (ex: 'lead-novo', 'qualificado').",
      inputSchema: {
        type: "object",
        properties: {
          contactId: { type: "string" },
          tag: { type: "string" },
        },
        required: ["contactId", "tag"],
      },
    },
    {
      name: "ghl.opportunity.create",
      description: "Cria opportunity em pipeline GHL com valor estimado.",
      inputSchema: {
        type: "object",
        properties: {
          contactId: { type: "string" },
          pipelineId: { type: "string" },
          stageId: { type: "string" },
          value: { type: "number" },
        },
        required: ["contactId", "pipelineId", "stageId", "value"],
      },
    },
    {
      name: "ghl.opportunity.move_stage",
      description: "Move opportunity entre stages do pipeline.",
      inputSchema: {
        type: "object",
        properties: {
          opportunityId: { type: "string" },
          toStageId: { type: "string" },
        },
        required: ["opportunityId", "toStageId"],
      },
    },
    {
      name: "ghl.workflow.trigger",
      description: "Dispara workflow GHL pra contato (ex: enviar link de pagamento).",
      inputSchema: {
        type: "object",
        properties: {
          contactId: { type: "string" },
          workflowId: { type: "string" },
        },
        required: ["contactId", "workflowId"],
      },
    },
  ];
}

export const ghlHandlers = {
  "ghl.contact.create": async (args: unknown) => {
    const input = CreateContact.parse(args);
    return {
      ok: false,
      stub: true,
      message:
        "Handler stub. Implementar fetch real ao GHL API v2 com Bearer GHL_API_KEY.",
      input,
    };
  },
  "ghl.contact.add_tag": async (args: unknown) => {
    const input = AddTag.parse(args);
    return { ok: false, stub: true, input };
  },
  "ghl.opportunity.create": async (args: unknown) => {
    const input = CreateOpportunity.parse(args);
    return { ok: false, stub: true, input };
  },
  "ghl.opportunity.move_stage": async (args: unknown) => {
    const input = MoveStage.parse(args);
    return { ok: false, stub: true, input };
  },
  "ghl.workflow.trigger": async (args: unknown) => {
    const input = TriggerWorkflow.parse(args);
    return { ok: false, stub: true, input };
  },
};
