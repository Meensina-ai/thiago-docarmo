# construcao-landscape-mcp

> MCP server custom para o pipeline de construção/landscape (Track A). Conecta GoHighLevel + QuickBooks + Google Calendar via uma única superfície chamável pelos agents do nicho.

## Por que existe

Os agents do nicho (em particular `construcao-landscape-pm`) precisam executar operações em 3 sistemas externos:

- **GoHighLevel (CRM)** — criar/atualizar contato, mover lead entre stages, disparar workflow
- **QuickBooks (Faturamento)** — criar invoice, registrar pagamento, gerar relatório AR
- **Google Calendar (Agenda)** — bloquear horário pra estimate visit ou execução de job

Sem MCP, cada agent precisaria conhecer 3 APIs diferentes. Com MCP, eles chamam um único tool no padrão dele.

## Stack

- Node 20+ TypeScript
- `@modelcontextprotocol/sdk` (SDK oficial Anthropic)
- `ky` ou `undici` pra HTTP
- `zod` pra validação de input/output

## Tools expostas

### GoHighLevel

- `ghl.contact.create({ name, phone, email?, tags? })` → contactId
- `ghl.contact.update({ contactId, fields })` → ok
- `ghl.contact.add_tag({ contactId, tag })` → ok
- `ghl.opportunity.create({ contactId, pipelineId, stageId, value })` → opportunityId
- `ghl.opportunity.move_stage({ opportunityId, toStageId })` → ok
- `ghl.workflow.trigger({ contactId, workflowId })` → ok

### QuickBooks

- `qb.customer.find_or_create({ name, email?, phone? })` → customerId
- `qb.invoice.create({ customerId, lineItems, dueDate, memo? })` → invoiceId + pdfUrl
- `qb.invoice.send({ invoiceId, email? })` → ok
- `qb.payment.record({ invoiceId, amount, method, date })` → paymentId
- `qb.report.ar_summary({ asOf? })` → list of open invoices

### Google Calendar

- `gcal.event.create({ calendarId, title, start, end, description?, location? })` → eventId
- `gcal.event.move({ eventId, newStart, newEnd })` → ok
- `gcal.event.cancel({ eventId })` → ok
- `gcal.availability.check({ calendarId, windowStart, windowEnd, durationMin })` → list of free slots

## Setup

1. Instalar deps: `npm install`
2. Build: `npm run build`
3. Configurar `.env` no repo (NÃO commitado) — ver `.env.example`:
   - `GHL_API_KEY`, `GHL_LOCATION_ID`
   - `QB_CLIENT_ID`, `QB_CLIENT_SECRET`, `QB_REALM_ID`, `QB_REFRESH_TOKEN`
   - `GCAL_CLIENT_ID`, `GCAL_CLIENT_SECRET`, `GCAL_REFRESH_TOKEN`, `GCAL_CALENDAR_ID`
4. Registrar no `.claude/settings.json` (ou per-user `~/.claude.json`) na seção `mcpServers`

## Registro no Claude Code

```json
{
  "mcpServers": {
    "construcao-landscape": {
      "command": "node",
      "args": ["/Users/<dono>/meensinaai-ba-thiago-docarmo/.claude/mcp/construcao-landscape-mcp/dist/index.js"],
      "env": {
        "GHL_API_KEY": "...",
        "GHL_LOCATION_ID": "...",
        "QB_CLIENT_ID": "...",
        "QB_CLIENT_SECRET": "...",
        "QB_REALM_ID": "...",
        "QB_REFRESH_TOKEN": "...",
        "GCAL_CLIENT_ID": "...",
        "GCAL_CLIENT_SECRET": "...",
        "GCAL_REFRESH_TOKEN": "...",
        "GCAL_CALENDAR_ID": "primary"
      }
    }
  }
}
```

## Status

- [ ] Esqueleto criado (este README + estrutura)
- [ ] `package.json` + `tsconfig.json`
- [ ] `src/index.ts` — bootstrap MCP server
- [ ] `src/ghl.ts` — tools GoHighLevel
- [ ] `src/qb.ts` — tools QuickBooks (OAuth2 refresh)
- [ ] `src/gcal.ts` — tools Google Calendar
- [ ] Testes de smoke por integração
- [ ] Documentar tokens OAuth necessários (passo a passo pro dono)

Próximo passo (semana 1 pós-kickoff): implementar `ghl.contact.create` + `gcal.event.create` pra validar pipeline lead → estimate visit ponta a ponta.

## Conexões

- Agent consumidor primário: `.claude/agents/nicho/construcao-landscape-pm.md`
- Plugin par: `.claude/plugins/construcao-landscape/`
- ADR: `wiki/clients/business-accelerator/thiago-docarmo/adr.md`
