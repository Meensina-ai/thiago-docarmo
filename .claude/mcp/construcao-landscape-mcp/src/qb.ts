/**
 * Tools QuickBooks — esqueleto.
 *
 * Implementacao real usa QuickBooks Online API v3.
 * OAuth2 refresh flow obrigatorio (refresh_token expira 100 dias —
 * implementar refresh proativo).
 *
 * Env vars: QB_CLIENT_ID, QB_CLIENT_SECRET, QB_REALM_ID, QB_REFRESH_TOKEN.
 *
 * Stubs por enquanto. Implementacao real comeca quando primeiro
 * invoice de pos-kickoff for emitido (semana 1).
 */

import { z } from "zod";

const FindOrCreateCustomer = z.object({
  name: z.string(),
  email: z.string().email().optional(),
  phone: z.string().optional(),
});

const LineItem = z.object({
  description: z.string(),
  quantity: z.number().positive(),
  rate: z.number().nonnegative(),
});

const CreateInvoice = z.object({
  customerId: z.string(),
  lineItems: z.array(LineItem).min(1),
  dueDate: z.string(),
  memo: z.string().optional(),
});

const SendInvoice = z.object({
  invoiceId: z.string(),
  email: z.string().email().optional(),
});

const RecordPayment = z.object({
  invoiceId: z.string(),
  amount: z.number().positive(),
  method: z.enum(["check", "card", "ach", "cash", "other"]),
  date: z.string(),
});

const ArSummary = z.object({
  asOf: z.string().optional(),
});

export function registerQbTools() {
  return [
    {
      name: "qb.customer.find_or_create",
      description:
        "Busca customer no QuickBooks por nome/email; cria se nao existir.",
      inputSchema: {
        type: "object",
        properties: {
          name: { type: "string" },
          email: { type: "string" },
          phone: { type: "string" },
        },
        required: ["name"],
      },
    },
    {
      name: "qb.invoice.create",
      description:
        "Cria invoice em QuickBooks com line items e prazo. Retorna invoiceId e pdfUrl.",
      inputSchema: {
        type: "object",
        properties: {
          customerId: { type: "string" },
          lineItems: {
            type: "array",
            items: {
              type: "object",
              properties: {
                description: { type: "string" },
                quantity: { type: "number" },
                rate: { type: "number" },
              },
              required: ["description", "quantity", "rate"],
            },
          },
          dueDate: { type: "string" },
          memo: { type: "string" },
        },
        required: ["customerId", "lineItems", "dueDate"],
      },
    },
    {
      name: "qb.invoice.send",
      description: "Envia invoice por email via QuickBooks.",
      inputSchema: {
        type: "object",
        properties: {
          invoiceId: { type: "string" },
          email: { type: "string" },
        },
        required: ["invoiceId"],
      },
    },
    {
      name: "qb.payment.record",
      description: "Registra pagamento aplicado a invoice.",
      inputSchema: {
        type: "object",
        properties: {
          invoiceId: { type: "string" },
          amount: { type: "number" },
          method: {
            type: "string",
            enum: ["check", "card", "ach", "cash", "other"],
          },
          date: { type: "string" },
        },
        required: ["invoiceId", "amount", "method", "date"],
      },
    },
    {
      name: "qb.report.ar_summary",
      description: "Relatorio AR aberto (contas a receber) na data informada.",
      inputSchema: {
        type: "object",
        properties: {
          asOf: { type: "string" },
        },
      },
    },
  ];
}

export const qbHandlers = {
  "qb.customer.find_or_create": async (args: unknown) => {
    const input = FindOrCreateCustomer.parse(args);
    return {
      ok: false,
      stub: true,
      message:
        "Handler stub. Implementar QBO API v3 com OAuth2 refresh flow.",
      input,
    };
  },
  "qb.invoice.create": async (args: unknown) => {
    const input = CreateInvoice.parse(args);
    return { ok: false, stub: true, input };
  },
  "qb.invoice.send": async (args: unknown) => {
    const input = SendInvoice.parse(args);
    return { ok: false, stub: true, input };
  },
  "qb.payment.record": async (args: unknown) => {
    const input = RecordPayment.parse(args);
    return { ok: false, stub: true, input };
  },
  "qb.report.ar_summary": async (args: unknown) => {
    const input = ArSummary.parse(args);
    return { ok: false, stub: true, input };
  },
};
