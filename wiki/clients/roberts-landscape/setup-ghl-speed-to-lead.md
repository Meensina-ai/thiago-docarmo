# Setup GHL — Ligar o Speed-to-Lead (passo a passo)

> Objetivo: fazer todo lead novo do GHL cair no Discord na hora, ativando o cenário Make `4540020` que JÁ existe.
> Tempo: ~10 min. Pré: acesso admin ao GHL do Roberts + ao Make (team 1353650).

## Passo 1 — Pegar a URL do webhook no Make
1. Make → cenário **"GHL → Discord Hub (All Companies)"** (id 4540020).
2. Abrir o 1º módulo (Custom webhook `GHL-All-Companies-Webhook`, hook 2070723).
3. Copiar a **Address/URL** do webhook (algo como `https://hook.us2.make.com/xxxxx`).

## Passo 2 — Criar o Workflow no GHL
1. GHL → **Automation → Workflows → + Create Workflow** (Start from scratch).
2. Nome: `Roberts → Make Discord Hub (Speed-to-Lead)`.
3. **Trigger:** `Contact Created` (ou `Opportunity Created` / `Form Submitted`, conforme onde o lead nasce). Pode adicionar mais de um trigger.

## Passo 3 — Adicionar ação Webhook (POST)
1. + Add Action → **Webhook**.
2. Method: **POST** · URL: a do Passo 1.
3. Body → **Custom Data (JSON)**, mapeando os 10 campos que o cenário espera (usar os {{merge fields}} do GHL):
```json
{
  "company": "Roberts Landscape",
  "event_type": "{{workflow.trigger_name}}",
  "contact_name": "{{contact.full_name}}",
  "contact_phone": "{{contact.phone}}",
  "contact_email": "{{contact.email}}",
  "service": "{{contact.service}}",
  "pipeline_stage": "{{opportunity.pipeline_stage}}",
  "appointment_date": "{{appointment.start_time}}",
  "message_body": "{{contact.last_message}}",
  "source": "{{contact.source}}"
}
```
> Campos sem valor podem ir vazios — o cenário só formata. Ajustar os merge fields aos nomes reais do teu GHL (custom fields de "service" etc).

## Passo 4 — Ativar tudo
1. GHL: **Publish** o workflow (toggle Save + Publish).
2. Make: abrir o cenário 4540020 → **toggle ON** (canto inferior esquerdo) → scheduling já é "immediately".
3. **Teste:** criar um contato fake no GHL → deve aparecer no canal Discord `1486001643819372658` em segundos.

## Passo 5 (recomendado) — auto-SMS acknowledge <2 min
No MESMO workflow, antes/depois do webhook, adicionar ação **Send SMS** (GHL nativo, não precisa Twilio):
```
Hi {{contact.first_name}}, this is Roberts Landscape — thanks for reaching out about your project. Someone from our team will call you within the hour. If now's good, reply here or call (508) 280-3770.
```

## Depois (próximas peças do híbrido)
- Cadência de 7 toques pós-estimate → workflow GHL separado (copy em [[motor-de-vendas]] §3).
- Ponte GHL → Jobber (lead qualificado vira estimate) → a construir.
- Reconectar Gmail Roberts pros toques de email.

## Troubleshooting
- Nada no Discord? Conferir: workflow Publicado, cenário Make ON, URL correta, bot DockPlus (conn 8061043) ainda no servidor Discord com acesso ao canal.
- Lead aparece sem campos? Ajustar os merge fields do Passo 3 aos nomes reais no GHL.
