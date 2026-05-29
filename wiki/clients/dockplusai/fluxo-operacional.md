---
tags:
  - dockplusai
  - track-D
  - fluxo-operacional
  - delegacao
---

# DockPlus AI — Fluxo Operacional (Track D)

> Como a Empresa AI entrega a DockPlus de ponta a ponta, mapeando cada etapa nos agentes que JÁ existem. Stack de entrega ao cliente final = **GoHighLevel (GHL)**. Idiomas: PT + EN.

## Visão geral (pipeline da agência)

```
1. CAPTAÇÃO  →  2. DISCOVERY  →  3. QUALIFICAÇÃO  →  4. PROPOSTA  →  5. CONTRATO
                                                                          ↓
        8. RECORRÊNCIA/RETENÇÃO  ←  7. ENTREGA (build GHL)  ←  6. KICKOFF/ONBOARDING
```

## Etapa a etapa — quem faz o quê

| # | Etapa | O que acontece | Agente(s) | Entregável |
|---|-------|----------------|-----------|------------|
| 1 | **Captação de lead** | Gerar topo de funil pra DockPlus (não pro cliente dela). Inbound + outbound. | `/meta-ads-manager`, `/google-ads-manager` (ads da própria DockPlus), `/permit-scraper` e `/tatiana` (outbound B2B), `/instagram-scraper` (referências) | Leads entrando no GHL |
| 2 | **Discovery** | Entrevista inicial, transforma conversa dispersa em briefing. Classifica B2C/B2B, dor real vs declarada, orçamento realista. | `/nina` | Briefing estruturado |
| 3 | **Qualificação** | BANT/MEDDIC, fit com pacote (Digital Presence vs Business Automation), research do prospect. | `/rodrigo` | Lead qualificado + recomendação de pacote |
| 4 | **Proposta** | Traduz briefing em proposta comercial dentro da tabela de pricing. Escopo, prazo, investimento, exclusões. | `/valeria` (gera) + `/hormozi-squad` (afinar oferta/ancoragem) | Proposta pronta |
| 5 | **Contrato** | Contrato de prestação (+ revshare se houver), coerência proposta↔contrato, cláusulas obrigatórias. | `/eduardo` | Contrato pra assinatura |
| 6 | **Kickoff / onboarding** | Plano de implementação, kickoff agendado, expectativas, coleta de acessos do cliente. | `/danilo` | Plano de onboarding + cronograma |
| 7 | **Entrega (build)** | Construção real do que foi vendido. | ver tabela abaixo | Sistema configurado e no ar |
| 8 | **Recorrência / retenção** | Relatório mensal, manutenção, prevenção de churn, upsell. | `/isabela` (retenção/churn), `/pedro` (saúde do funil GHL), `/marcos` (MRR/financeiro) | Cliente ativo + MRR crescendo |

## Etapa 7 — Entrega por componente do pacote

| Componente vendido | Quem entrega |
|--------------------|--------------|
| Site corporativo / e-commerce | `/victor` (full stack premium) |
| Chatbot WhatsApp / Instagram / site | `/gabriel` (GPT Agent Builder — instructions, anti-injection, handoff) |
| CRM GoHighLevel + pipeline + follow-up | `/crm-manager` (operacional) + `/pedro` (arquitetura de funil/automação) |
| Google My Business otimizado | `/google-my-business` |
| SEO básico | `/gustavo` |
| Analytics / dashboard de resultados | `/victor` + `/fernando` (leitura de métricas) |

## Orquestração

- **CEO (`/james`)** identifica que o pedido é Track D (DockPlus), classifica a etapa do pipeline e delega ao agente certo. Se a entrega cruza áreas (ex.: build completo de Business Automation), monta operação cross-departamento (Victor + Gabriel + crm-manager em paralelo, Danilo coordenando).
- **`/sofia`** faz a ponte com humanos (cliente final, Gustavo) via Telegram/Email/Slack quando precisa de input externo.
- **`/dev-partnership-coordinator`** entra quando a entrega depende de dev do Gustavo (BR) — ciclos quinzenais, handoff técnico.

## Decisões em aberto que afetam o fluxo

- Pricing real → trava a etapa 4 (Valeria precisa da tabela de números).
- DockPlus tem GHL próprio (sub-contas por cliente?) → confirmar pra calibrar `crm-manager` e `pedro`.
- Quem opera hoje as entregas manualmente (você? Gustavo? terceiros?) → define o que automatizar primeiro pra te tirar da operação.

## Próximo passo sugerido

Rodar 1 cliente-piloto fim a fim por este fluxo pra validar handoffs entre agentes antes de escalar. Candidato natural: o próximo lead inbound de Business Automation (pacote mais popular).
