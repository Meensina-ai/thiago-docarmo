# Runbook — Fluxo Operacional Roberts (híbrido GHL + Jobber)

> Gerado: 2026-06-13 | James | Decisão do dono: **híbrido** — GHL/Discord captura e avisa rápido, Jobber fecha/cobra.
> Este runbook amarra o motor de vendas ([[motor-de-vendas]]) na infra REAL do Make.com. Objetivo: deixar "pronto pra ligar".
> Make: org 5131318 · team 1353650.

## Arquitetura híbrida (quem faz o quê)
```
LEAD (Paperform / ligação / GBP / Ads)
   │
   ├─► GHL (CRM de captura + SMS + pipeline)
   │       │
   │       ├─► [Make 4540020] GHL → Discord Hub  ......... SPEED-TO-LEAD (alerta time <15min)
   │       ├─► GHL Workflow: auto-SMS acknowledge <2min .. (a configurar no GHL)
   │       └─► GHL Workflow: cadência 7 toques follow-up .. (a configurar no GHL — copy em motor-de-vendas)
   │
   ├─► AGENDAMENTO: Google Calendar (agendarobertslandscape@gmail.com)
   │       ├─► [Make 4561490] Bot Agenda Discord (cria/lê/deleta evento via Discord)
   │       ├─► [Make 4540326] Google Calendar → Discord (agendaroberts)
   │       └─► [Make 4546539 / 4540880] Lembrete 30 min antes → Discord
   │
   └─► PONTE → JOBBER (estimate + invoice + Square) ....... a construir (Jobber não está no Make)
```

## Componentes REAIS já existentes (todos isActive=false — DESLIGADOS)

| Scenario ID | Nome | Função | Liga em |
|---|---|---|---|
| 4540020 | GHL → Discord Hub (All Companies) | **Speed-to-lead**: webhook GHL → posta lead no Discord | webhook 2070723 |
| 4540880 | GHL Reminder → Discord (30 min antes) | lembrete de compromisso | webhook 2071179 |
| 4561490 | Bot Agenda Discord | agendamento via Discord ↔ Calendar | — |
| 4540326 | Google Calendar → Discord (agendaroberts) | novo evento no calendar → Discord | — |
| 4546539 | Calendar Reminder → Discord (30 min antes) | lembrete | — |

### Detalhe do speed-to-lead (4540020)
- **Webhook:** hookId 2070723 (label `GHL-All-Companies-Webhook`). GHL precisa POSTAR aqui.
- **Payload esperado (10 campos):** `company`, `event_type`, `contact_name`, `contact_phone`, `contact_email`, `service`, `pipeline_stage`, `appointment_date`, `message_body`, `source`.
- **Saída:** Discord canal `1486001643819372658` via bot DockPlus (conn 8061043). Mensagem já formatada com emojis + timestamp.
- ⚠️ Para virar Tier A/B/C (priorização do motor de vendas), adicionar campo no payload e uma linha na mensagem.

## Os 3 plugs que SÓ o Thiago consegue dar (destravam "ligar")
1. **Wire o webhook no GHL:** criar Workflow no GHL que, em "novo lead/oportunidade", faz POST pro webhook 2070723 com os 10 campos. Sem isso o speed-to-lead não dispara. → depois é só ativar o scenario 4540020.
2. **SMS + email do cliente:** no modelo híbrido, o **SMS sai do próprio GHL** (não precisa Twilio). Montar no GHL: (a) auto-SMS acknowledge <2min, (b) cadência de 7 toques pós-estimate. Copy pronta em [[motor-de-vendas]]. Email exige **reconectar o Gmail do Roberts** (conn google-restricted EXPIROU 2026-03-08).
3. **Ponte GHL → Jobber:** Jobber não está no Make. Quando lead qualifica, criar estimate no Jobber. Opções: app Jobber no Make/Zapier, ou GHL→webhook→Jobber API. Decidir e construir.

## Checklist de ativação (ordem)
- [ ] Conectar formulários Paperform como fonte de lead → GHL (ou direto no webhook 2070723)
- [ ] GHL Workflow: POST lead → webhook 2070723 (10 campos)
- [ ] Ativar scenario 4540020 (speed-to-lead alerta Discord)
- [ ] GHL Workflow: auto-SMS acknowledge <2min (copy em motor-de-vendas §2)
- [ ] GHL Workflow: cadência 7 toques (copy em motor-de-vendas §3)
- [ ] Reconectar Gmail Roberts (pros toques de email)
- [ ] Definir responsável do 1º contato humano <15min (NÃO o Thiago)
- [ ] Construir ponte GHL → Jobber (estimate/invoice/Square)
- [ ] Ativar scenarios de agendamento (4561490, 4540326, 4546539, 4540880)

## Observações
- Domínio divergente: Make usa `roberts-landscaping.com`; CLAUDE.md diz `roberts-landscape.com`. Confirmar o correto.
- Telegram Bot Agenda e ClickUp conectados, sem cenário — potencial canal de notificação/gestão de tarefa do time.
- O que James CONSEGUE construir direto: specs de GHL workflow, blueprint de scenario Make (ex: ponte Jobber), mensagens. O que depende do Thiago: autorizar/conectar contas e ativar cenários que mandam mensagem a cliente real.
