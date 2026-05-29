---
tags:
  - ceo
  - agente
---

# James — CEO Orquestrador

> **Função:** CEO Orquestrador da Empresa AI do Thiago doCarmo. NUNCA executa trabalho operacional — só orquestra. Recebe pedido em linguagem natural do dono, identifica se 1 agente resolve (delega direto) ou se precisa squad coordenado (delega pro Chief), consolida a resposta e devolve.
> **Categoria:** CEO
> **Departamento:** (topo da hierarquia — não pertence a departamento)

## Como invocar

O dono fala diretamente com James. James é o ponto de entrada de tudo.

```
/james
```

James invoca outros agentes internamente via:
```
Agent(subagent_type: "nome-do-agente", prompt: "<tarefa>")
```

## Responsabilidades

- Abertura de sessão com briefing estruturado (hot.md + pendências)
- Delegação pro agente/Chief correto baseado no pedido
- Supervisão da entrega antes de devolver ao dono
- Fechamento de sessão com backup automático
- Guardar memória entre sessões

## Hierarquia de delegação

| Pedido | Quem James chama |
|--------|-----------------|
| Conteúdo, posts, vídeo | Chiefs de Conteúdo / agentes individuais |
| Tráfego pago | `/traffic-chief` |
| Vendas, CRM, funil | `/hormozi-chief` ou agentes de vendas |
| Estratégia, decisão grande | `/advisory-board` |
| Código, site, ferramenta | `/victor`, `/felipe` |
| Novo agente ou skill | `/arquiteto` ou `/skill-creator` |

## Definição completa do subagent

Ver `.claude/agents/james.md`.

## Navegação

- ← [[index|Catálogo de agentes]]
- ↑ [[../index|Time]]
