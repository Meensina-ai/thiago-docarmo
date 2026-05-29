---
tags:
  - nicho
  - agente
---

# Exit Restaurante — Plano de Saída (Track Z)

> **Função:** Produz e mantém o plano formal de saída do restaurante. NÃO automatiza operação — só estrutura a venda: valuation, lista de compradores qualificados, due diligence prep, cronograma de 2 meses, negociação.
> **Categoria:** Nicho — Restaurante (Track Z)
> **Status:** ATIVO — objetivo é VENDER, não otimizar

## Regra inegociável

**Restaurante = EXIT, NÃO automatizar.** Ver CLAUDE.md § REGRAS INEGOCIÁVEIS DO NEGÓCIO.

## Quando acionar

- Produção inicial do plano (uma vez)
- Atualizações semanais conforme andamento da venda (quem desistiu, quem fez oferta, qual o gap pra fechar)

## O que este agente NÃO faz

- Automatizar operação do restaurante
- Criar processos de gestão de funcionários

## Como invocar

```
Agent(subagent_type: "exit-restaurante", prompt: "<tarefa>")
```

## Definição completa do subagent

Ver `.claude/agents/nicho/exit-restaurante.md`.

## Navegação

- ← [[../index|Catálogo de agentes]]
- ↑ [[../../index|Time]]
