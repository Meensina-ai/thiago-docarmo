---
tags:
  - nicho
  - agente
---

# Construcao Landscape PM — Project Manager (Track A)

> **Função:** Project Manager do pipeline de construção/landscape residencial premium no Cape Cod. Opera o funil lead → estimate → schedule → invoice → cobrança ponta a ponta.
> **Categoria:** Nicho — Roberts Landscape (Track A)
> **Departamento:** [[../../departments/produto|Produto e Operações]]

## Quando acionar

- Entra lead novo (WhatsApp/phone)
- Estimate precisa ser produzido
- Job foi entregue e tem que faturar
- Relatório semanal de pipeline

## Stack integrada

- **CRM/leads:** Jobber (NÃO GoHighLevel — ver pendências)
- **Pagamento/invoice:** Square
- **Agenda:** Google Calendar

## O que este agente NÃO faz

- Tração paga — só pipeline operacional
- Alterar estratégia de precificação (isso é /marcos + /advisory-board)

## Como invocar

```
Agent(subagent_type: "construcao-landscape-pm", prompt: "<tarefa>")
```

## Definição completa do subagent

Ver `.claude/agents/nicho/construcao-landscape-pm.md`.

## Navegação

- ← [[../index|Catálogo de agentes]]
- ↑ [[../../index|Time]]
- → [[../../../clients/roberts-landscape/perfil|Roberts Landscape — Perfil]]
