# Integrações — Stack Operacional

## Roberts Landscape (Track A — construção/landscape)

- **Field service / CRM / scheduling / invoice:** Jobber
- **Pagamento:** Square
- **Comunicação com cliente/lead:** telefone + SMS direto (sem automação hoje)
- **Volume de leads:** 10 a 30/mês

> ⚠️ CORREÇÃO IMPORTANTE: o contexto pré-onboarding (hot.md) assumia GoHighLevel (CRM)
> + QuickBooks (invoice). O dono confirmou no onboarding que a stack real é
> **Jobber + Square**. Os agentes de nicho (`construcao-landscape-pm`) e o MCP
> `construcao-landscape-mcp` foram desenhados pra GHL + QuickBooks + Google Calendar
> e precisam ser refeitos pra Jobber + Square. Ver pendência.

## Outras ferramentas em uso (do dono, geral)

- Cursor ($200), Claude Code ($200), Codex
- Paperclip (Hostinger Docker), Ollama, DeepSeek, Qwen, Hermes
- N8N, Composio, Matomo

---

## 2026-06-13 — Infraestrutura REAL descoberta no Make.com (org 5131318 / team 1353650)

> Descoberto ao inspecionar o ambiente conectado. **Contradiz parcialmente** o registro "stack = Jobber + Square". Existe uma camada de automação montada em torno de **GoHighLevel (GHL) + Discord + Paperform + Google Calendar** — TODA DESLIGADA hoje.

### Conexões ativas no Make
- **Discord** (2 bots: DockPlus + RobertsLDC/thiagao.ai) — hub de operações
- **Google Calendar** (agendarobertslandscape@gmail.com = "agenda Roberts"; noahnathan86@gmail.com = "Roberts Calendar"; dockplusai)
- **Paperform** (3 conexões) — captura de lead via formulário (NÃO usado em nenhum cenário ainda)
- **GoHighLevel** — via webhooks (cenários "GHL → Discord Hub", "GHL Reminder → Discord")
- **ClickUp** (THIAGO DO CARMO) — gestão de tarefas
- **Telegram Bot Agenda** — conectado, sem cenário
- **OpenAI** — conectado
- **Gmail Roberts** (contact@roberts-landscaping.com) — ⚠️ google-restricted EXPIRADO em 2026-03-08/09, precisa reconectar

### Cenários existentes (TODOS isActive: false — desligados)
1. `Bot Agenda Discord` — agendamento via Discord ↔ Google Calendar
2. `Calendar Reminder → Discord (30 min antes)`
3. `GHL → Discord Hub (All Companies)` — webhook GHL → Discord (hookId 2070723)
4. `GHL Reminder → Discord (30 min antes)` — webhook (hookId 2071179)
5. `Google Calendar → Discord (agendaroberts)`

### Achados que precisam de decisão do dono
- **CRM source of truth:** GHL (já wired no Make) vs Jobber (documentado, NÃO conectado ao Make). Define onde o fluxo de lead/follow-up é construído.
- **SEM provedor de SMS** (sem Twilio). Speed-to-lead/follow-up por SMS depende de GHL SMS ou conectar Twilio.
- **Domínio divergente:** roberts-landscaping.com (Make) vs roberts-landscape.com (CLAUDE.md).
- **Gmail Roberts expirado** — reconectar pra automação de email.
