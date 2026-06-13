# Motor de Vendas — Roberts Landscape (lead → venda → pago)

> Gerado: 2026-06-13 | Agente: vinicius (funnel architect) via James | Status: PLANO pronto pra executar
> Cliente: Roberts Landscape Design and Construction · Cape Cod + South Shore + Plymouth, MA
> Stack: Jobber (CRM/estimate/invoice) + Square (pagamento) + N8N (automação) + SMS/telefone
> ⚠️ Números abaixo são BENCHMARKS de mercado premium, não dados reais do Roberts. 1ª tarefa: puxar baseline real do Jobber.

## Princípio-mestre (aviso estratégico)
**Não escalar leads (GBP/Ads/Permits) antes de tampar a conversão.** Mais lead num funil que vaza 50% no follow-up = queimar dinheiro. Sequência certa: **conserta conversão → depois abre a torneira.** As duas maiores perdas: etapa 6 (follow-up pós-estimate) e etapa 2 (speed-to-lead).

## 1. Funil por etapa (conversão alvo + onde vaza)
| # | Etapa | Conv. alvo | Vazamento típico |
|---|-------|-----------|------------------|
| 1 | Lead novo | — | Some no SMS/voicemail, ninguém vê em <1h |
| 2 | Primeiro contato | 70-85% | **Speed-to-lead lento** → lead já ligou pro concorrente |
| 3 | Qualificação | 60-75% | Aceitar todo job → agenda de visita que não fecha |
| 4 | Site visit agendado | 70-80% | No-show, reagendamento infinito |
| 5 | Estimate enviado | 75-85% | **Estimate demorado** (dono na obra) |
| 6 | Follow-up/decisão | 35-50% fecham | **MAIOR VAZAMENTO: "estimate sumiu"** |
| 7 | Job fechado | — | Sem deposit → job "fechado" evapora |
| 8 | Pago | 90%+ | Net-30 sem milestone billing |

Conversão composta lead→fechado: ~14% frio / 20-35% organizado. Diferença entre desorganizado (8-12%) e organizado está quase toda em etapa 6 e etapa 2.

**Foco 90d (ordem de ROI):** (1) follow-up pós-estimate, (2) speed-to-lead, (3) velocidade do estimate, (4) qualificação.

## 2. Speed-to-lead
Metas: **auto-SMS <2 min** (automático) + **contato humano <15 min** comercial / <1h fora.
**O Thiago NÃO é o speed-to-lead.** Opção A (recomendada): N8N dispara auto-SMS <2min + pessoa designada (admin/VA $5-8/h) faz contato humano <15min; Thiago só entra na site visit.

**Auto-acknowledge SMS (<2min, automático):**
> Hi [First Name], this is Roberts Landscape — thanks for reaching out about your project. We've got your request and someone from our team will call you within the hour to talk through it. If now's a good time, reply here or call us at (508) 280-3770. — Roberts Landscape Design & Construction

**1º contato humano (call, <15min):**
> "Hi [Name], this is [Rep] with Roberts Landscape Design and Construction — I saw you reached out about your project in [Town]. Did I catch you at an okay time? Great. Tell me a little about what you're looking to do — is this a full design-build, or a specific piece like a patio, walkway, or outdoor living space? [listen] Got it. We do a free on-site walkthrough so we can give you a real number instead of a guess. I've got [Thu morning] or [Fri afternoon] open this week — which works better for you?"

**1º contato SMS (se não atende):**
> Hi [Name], [Rep] here from Roberts Landscape. Tried giving you a quick call about your [project type] in [Town]. We'd love to come take a look and put together a real estimate — no charge. I have Thursday AM or Friday PM open this week. Which works for you?

## 3. Sequência de follow-up pós-estimate (conserto do maior vazamento)
5-7 toques (a maioria dos contractors faz 1 e desiste; fecha no toque 3-5). Premium = persistente sem ser carente.

| Toque | Quando | Canal | Objetivo |
|-------|--------|-------|----------|
| 1 | Dia 0 | Call + Email | Entregar com contexto |
| 2 | Dia 1 | SMS | Confirmar recebimento |
| 3 | Dia 3 | Call (vm ok) | Toque humano, ajustar escopo |
| 4 | Dia 5 | Email | Valor + prova social |
| 5 | Dia 8 | SMS | Urgência real (agenda enchendo) |
| 6 | Dia 14 | Call | Check-in de decisão |
| 7 | Dia 21+ | Email | "Porta aberta", encerra sem queimar |
| — | Dia 45/90 | Email | Re-engajamento |

**Toque 1 — Email com o estimate (Dia 0):**
> Subject: Your [Town] landscape estimate — Roberts Landscape
> Hi [Name], Great meeting you at the property. Attached is your detailed estimate for the [patio / outdoor living / full design-build] project we walked through. A few things I built into this: - [design point discutido] - [material/scope point]. The number reflects [licensed install / premium materials / our 2-year workmanship guarantee]. Happy to walk through any line item or adjust scope to fit where you want to land. What questions can I answer for you? Easiest is to call/text me at (508) 280-3770. Best, [Name] — Roberts Landscape Design & Construction

**Toque 2 — SMS (Dia 1):**
> Hi [Name], [Rep] from Roberts Landscape — just making sure the estimate for your [project] came through okay. Any questions on it? Happy to jump on a quick call.

**Toque 3 — Call voicemail (Dia 3):**
> "Hi [Name], [Rep] with Roberts Landscape. Following up on the estimate for your [project]. No pressure at all — I just want to make sure you have everything you need to make a decision, and I'm glad to tweak the scope if you're weighing options. Give me a shout at (508) 280-3770 whenever's good. Thanks [Name]."

**Toque 4 — Email prova social (Dia 5):**
> Subject: A [similar project] we just wrapped in [nearby town]
> Hi [Name], Wanted to share a project we recently completed in [Pinehills / Manomet / nearby] — similar scope to yours. [1-2 fotos]. The homeowners' biggest worry going in was [objeção comum], and here's how we handled it: [uma frase]. Still happy to walk through your estimate whenever you're ready. No rush — just want you to feel confident when you decide. Best, [Name]

**Toque 5 — SMS urgência real (Dia 8):**
> Hi [Name] — our build calendar for [late summer / fall] is starting to fill up. If you're leaning toward moving forward on the [project], I'd love to hold a slot for you. Want me to pencil you in while you finalize? — [Rep], Roberts Landscape

**Toque 6 — Call (Dia 14):** check-in direto, perguntar objeção real (preço, timing, escopo, decisor).

**Toque 7 — Email porta aberta (Dia 21+):**
> Subject: Closing the loop on your [project]
> Hi [Name], I don't want to keep crowding your inbox, so this is my last note for now. Your estimate stays good — whenever the timing's right for your [project], just reach out and we'll pick right back up. Pricing may shift with material costs, but we'll honor the scope. Thanks for considering Roberts Landscape. Hope to build something great for you down the road. Best, [Name] — (508) 280-3770

## 4. Qualificação leve (priorizar ticket alto sem espantar)
Ler SINAIS no 1º contato, classificar A/B/C internamente. Perguntas naturais: escopo ("full design-build or a specific piece?"), timeline, histórico na propriedade, decisor ("just you or a partner too?"), range suave no fim ("focused project or transforming the whole space?").
- **Tier A** (Thiago vai, estimate <48h, full follow-up): waterfront/Pinehills/Chiltonville, linguagem "outdoor living/transform", multi-elemento, referral premium.
- **Tier C** (agendar em bloco, template rápido, 3 toques): "quick quote on single item", sensível a preço, "cheapest", não-proprietário.

## 5. Métricas no Jobber + metas 90d
Review semanal de 20 min. **Semana 1 = puxar baseline real dos últimos 90 dias** (sem baseline é voo cego).
| Métrica | Benchmark | Meta 90d |
|---------|-----------|----------|
| Close rate (lead→job) | desorg. 8-12% | +5-8 pts |
| Quote close rate | 30-40% | 45-55% |
| Tempo lead→estimate | <5 dias | <72h Tier A |
| Speed-to-lead | — | <15 min comercial |
| Ticket médio | (medir) | +10-15% via Tier A |
| No-show site visit | — | <15% |

## 6. Automatizar vs. toque humano
**Automatizar (N8N + Jobber/Square):** auto-SMS speed-to-lead, lembrete de visita, cadência de follow-up (toques 2/4/5/7), alerta "estimate parado 3 dias", pedido de pagamento+recibo (Square), pedido de review pós-job, milestone billing.
**Humano (diferencial premium):** 1º contato call, site visit (sempre Thiago em Tier A), toques 1/3/6, negociação de escopo/preço, todo Tier A waterfront/Pinehills.
**Princípio:** automatize acknowledge/lembrete/re-toque; humano no call/visita/fechamento. Tira ~70% do operacional do dono.

## Plano de ação (primeiras 2 semanas)
1. Puxar baseline do Jobber.
2. Ligar auto-SMS de speed-to-lead (N8N).
3. Designar quem faz 1º contato humano (não o Thiago) + 3 templates.
4. Montar sequência de 7 toques no N8N + scripts manuais.
5. Tag Tier A/B/C no Jobber + regra de priorização.
6. Review semanal de 20 min.

## Acionamentos sugeridos
- **Victor** → workflows N8N (auto-SMS, cadência, alerta).
- **Pedro/CRM** → tags Tier A/B/C + campos de qualificação no Jobber.
- **Copy Squad** → adaptar templates à brand voice (preencher brand-voice.md).
- **Marcos/CFO** → validar antes de escalar tráfego pro funil.
