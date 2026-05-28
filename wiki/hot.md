# HOT CACHE — Empresa AI

> Status: **ONBOARDING PENDENTE**

## Bem-vindo à sua Empresa AI!

Este é o primeiro acesso. O CEO vai se apresentar e fazer as perguntas do protocolo de onboarding pra conhecer seu negócio.

Depois do onboarding:
- Todos os seus agentes vão saber tudo sobre sua empresa
- Este arquivo vai ser atualizado automaticamente com suas prioridades do dia
- O CEO vai se apresentar com o nome que você escolher

## Contexto rápido pré-onboarding (extraído da reunião 2 com Thiago)

- **Dono:** Thiago doCarmo
- **Negócios atuais:** construção/landscape no Cape (MA) + restaurante (em processo de venda) + dev/parceria SaaS com Gustavo (BR)
- **Infra própria:** VPS/data center plano Boston + SC + GO + futuro SP
- **Stack já em uso:** Cursor (assinatura $200), Claude Code, Codex, Paperclip (Hostinger Docker), Ollama, DeepSeek, Qwen, Hermes, N8N, Composio, Matomo, GoHighLevel, QuickBooks
- **Dor central:** sair da construção e do restaurante o mais rápido possível, parar de gerenciar funcionários, migrar pra receita escalável com $10k/mês mínimo

## Prioridades semana 1 (sugestão, validar no kickoff)

1. Instalar e configurar o repo na máquina do Thiago + abrir no Claude Code
2. Rodar PROTOCOLO DE ONBOARDING (perguntas de diagnóstico) — nomear CEO IA, mercado, regras inegociáveis
3. Estruturar pipeline construção/landscape (lead → estimate → schedule → invoice → cobrança) com agent `construcao-landscape-pm`
4. Mapear plano de saída do restaurante (não automatizar, fechar venda) com agent `exit-restaurante`
5. Validar estratégia do data center / VPS com agent `vps-ops-strategist`

## Números-Chave (preencher no onboarding)
- Receita atual landscape/construção:
- Receita atual restaurante:
- Custos mensais fixos:
- Meta receita escalável: $10.000/mês (já declarado)
- Caixa atual:

## Alertas
- Onboarding pendente — responder as perguntas do CEO
- Track B (parceria SaaS Invoice com Gustavo): FORA do escopo da semana 1, será tratado em fluxo separado de joint venture (contrato Eduardo)
- Restaurante: NÃO automatizar — é exit
- Funcionários estressando — risco emocional alto, plano semana 1 precisa ser FOCADO, não disperso

## Custom agents do nicho disponíveis (ADR aprovado 28/mai 10:45)

Tier 1 Claude Native. Agents em `.claude/agents/nicho/`. MCP em `.claude/mcp/construcao-landscape-mcp/`. Plugin em `.claude/plugins/construcao-landscape/`.

1. **construcao-landscape-pm** — Track A. Pipeline lead → estimate → schedule → invoice → cobrança. Usa MCP (GHL + QuickBooks + Google Calendar). Acionar quando entra lead novo, faturar job entregue, ou relatório semanal sexta 17h.
2. **invoice-product-arch** — Track B. SaaS Invoice multilíngue. **DORMENTE** até joint venture formal com sócio dev. Acordar com "acorda invoice-product-arch".
3. **vps-ops-strategist** — Track C. Estratégia data center próprio (Hostinger/HostGator/AWS comparativo, pricing, ICP). Revisão trimestral OU oportunidade nova.
4. **dev-partnership-coordinator** — Coordena ciclos quinzenais com sócio dev BR. Sprints, backlog GitHub, retros. Reduz bus-factor.
5. **exit-restaurante** — Track Z. Plano formal de saída (valuation, compradores, due diligence, cronograma 2 meses). Atualização semanal segunda 9h NY.

## Live Artifacts iniciais (a popular conforme uso)

- `live-artifacts/pipeline-construcao.html`
- `live-artifacts/dashboard-receita-pessoal.html`
- `live-artifacts/exit-restaurante.html`
- `live-artifacts/vps-positioning.html`

---
