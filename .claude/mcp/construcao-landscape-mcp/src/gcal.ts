/**
 * Tools Google Calendar — esqueleto.
 *
 * Implementacao real usa Google Calendar API v3.
 * OAuth2 com refresh_token (escopo
 * https://www.googleapis.com/auth/calendar.events).
 *
 * Env vars: GCAL_CLIENT_ID, GCAL_CLIENT_SECRET, GCAL_REFRESH_TOKEN,
 * GCAL_CALENDAR_ID (default 'primary').
 *
 * Stubs por enquanto. Implementacao real comeca quando primeiro
 * estimate visit precisar ser agendado (semana 1).
 */

import { z } from "zod";

const CreateEvent = z.object({
  calendarId: z.string().default("primary"),
  title: z.string(),
  start: z.string(),
  end: z.string(),
  description: z.string().optional(),
  location: z.string().optional(),
});

const MoveEvent = z.object({
  eventId: z.string(),
  newStart: z.string(),
  newEnd: z.string(),
});

const CancelEvent = z.object({
  eventId: z.string(),
});

const CheckAvailability = z.object({
  calendarId: z.string().default("primary"),
  windowStart: z.string(),
  windowEnd: z.string(),
  durationMin: z.number().int().positive(),
});

export function registerGcalTools() {
  return [
    {
      name: "gcal.event.create",
      description:
        "Cria evento em Google Calendar (estimate visit ou execucao de job).",
      inputSchema: {
        type: "object",
        properties: {
          calendarId: { type: "string" },
          title: { type: "string" },
          start: { type: "string" },
          end: { type: "string" },
          description: { type: "string" },
          location: { type: "string" },
        },
        required: ["title", "start", "end"],
      },
    },
    {
      name: "gcal.event.move",
      description: "Move evento existente pra novo horario.",
      inputSchema: {
        type: "object",
        properties: {
          eventId: { type: "string" },
          newStart: { type: "string" },
          newEnd: { type: "string" },
        },
        required: ["eventId", "newStart", "newEnd"],
      },
    },
    {
      name: "gcal.event.cancel",
      description: "Cancela evento.",
      inputSchema: {
        type: "object",
        properties: {
          eventId: { type: "string" },
        },
        required: ["eventId"],
      },
    },
    {
      name: "gcal.availability.check",
      description:
        "Retorna slots livres dentro de janela, considerando duracao minima do compromisso.",
      inputSchema: {
        type: "object",
        properties: {
          calendarId: { type: "string" },
          windowStart: { type: "string" },
          windowEnd: { type: "string" },
          durationMin: { type: "number" },
        },
        required: ["windowStart", "windowEnd", "durationMin"],
      },
    },
  ];
}

export const gcalHandlers = {
  "gcal.event.create": async (args: unknown) => {
    const input = CreateEvent.parse(args);
    return {
      ok: false,
      stub: true,
      message:
        "Handler stub. Implementar GCal API v3 com OAuth2 refresh flow.",
      input,
    };
  },
  "gcal.event.move": async (args: unknown) => {
    const input = MoveEvent.parse(args);
    return { ok: false, stub: true, input };
  },
  "gcal.event.cancel": async (args: unknown) => {
    const input = CancelEvent.parse(args);
    return { ok: false, stub: true, input };
  },
  "gcal.availability.check": async (args: unknown) => {
    const input = CheckAvailability.parse(args);
    return { ok: false, stub: true, input };
  },
};
