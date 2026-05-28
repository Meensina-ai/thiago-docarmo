# START HERE — Primeira leitura ao abrir o repo

> Pré-populado pelo onboarding-chief em 28/mai/2026 com base na reunião 2 com Thiago doCarmo. O CEO IA atualiza no kickoff conforme Thiago confirma/corrige.

## Quem é o CEO
[Thiago escolhe nome no kickoff. Atualizar `.claude/agents/ceo.md` com o nome escolhido. Atenção: nome "Thiago" não pode ser usado pro CEO porque agora um agent funcional chamado `product-builder` ocupa o lugar do antigo agent `thiago.md` — qualquer outro nome funciona.]

## Quem é o dono
**Thiago doCarmo** — empresário no Cape Cod (MA), opera construção/landscape + restaurante (em venda) + parceria de dev SaaS com Gustavo (BR). Inglês fluente. Tem infra própria de VPS/data center em construção. Stack avançado (Claude Code, Cursor, Ollama, DeepSeek, Hermes, Paperclip, Composio, N8N). Cliente real fechado (dentista).

## 3 frentes do negócio

1. **Construção/Landscape Cape (Track A — foco semana 1):**
   $300k/mês, 15-20% margem, sazonal, dor com funcionários e lesões.

2. **Restaurante (EXIT — não automatizar):**
   Em venda, 4 interessados, prazo ~2 meses.

3. **Parceria SaaS com Gustavo (Track B — fora da semana 1):**
   Joint venture com Fábio (contrato Eduardo pendente). Primeira ideia: Invoice SaaS multilíngue integrado a Claude Code via MCP.

## Stack inegociável (NÃO trocar)

Cursor, Claude Code, Codex, Paperclip, Ollama, DeepSeek, Qwen, Hermes, N8N, Composio, Matomo, GoHighLevel, QuickBooks, GitHub, WhatsApp Business, Telegram. VPS Hostinger (testes) + data center próprio em construção.

## 3 dores principais hoje

1. **Funcionários estressando:** atendente e cozinheiro brigando no restaurante, funcionário caiu da máquina e quebrou as 2 pernas, 2 funcionários saíram em maio pra abrir concorrência. Quer parar de gerenciar gente.
2. **Receita escalável insuficiente:** precisa de $2.500/semana ou $10.000/mês livre da construção. Hoje sobra ~$15k/mês mas trabalhando como "burro de carga".
3. **Carga emocional alta:** "vou enfartar / vou ficar diabético". Plano semana 1 precisa ser FOCADO, não disperso em 6 frentes.

## Como pedir trabalho

- Fala sempre com o CEO em linguagem natural
- CEO delega: invoca subagent direto OU Chief de squad
- Aluno NUNCA chama agent específico

## Agents customizados do nicho (criados após ADR aprovado)

1. `construcao-landscape-pm` — pipeline lead → estimate → schedule → invoice → cobrança
2. `invoice-product-arch` — arquiteto técnico do SaaS de invoice (Track B)
3. `vps-ops-strategist` — estratégia data center (Boston/SC/GO)
4. `dev-partnership-coordinator` — coordena ciclos Thiago + Gustavo
5. `exit-restaurante` — plano de venda/saída do restaurante (NÃO automatizar)

## Próximos passos

1. Rodar PROTOCOLO DE ONBOARDING ao abrir Claude Code primeira vez (hot.md tem marker)
2. Escolher nome do CEO IA
3. Confirmar mercado primário (US recomendado, mas tem Brasil também)
4. Validar/corrigir `meu-negocio/empresa.md`
5. Plano semana 1 vive em `wiki/clients/business-accelerator/thiago-docarmo/planos/` (NO REPO DA Me Ensina AI — copiar pra cá depois)
