# Plugin: construcao-landscape

Plugin custom pro nicho de construcao/landscape residencial premium (Cape Cod, MA). Empacota:

- 5 agents do nicho (em `../../agents/nicho/`)
- MCP server custom (em `../../mcp/construcao-landscape-mcp/`)
- 4 Live Artifacts (pipeline, dashboard receita, exit restaurante, VPS positioning)
- 4 scheduled tasks (pipeline diario, snapshot semanal, review mensal, exit semanal)

Stack: Tier 1 Claude Native (conforme ADR aprovado 28/mai/2026).

## Manifesto

Ver `plugin.yaml`.

## Agents incluidos

| Agent | Track | Quando aciona |
|---|---|---|
| `construcao-landscape-pm` | A | Lead novo, faturar, relatorio semanal |
| `invoice-product-arch` | B | DORMENTE ate joint venture |
| `vps-ops-strategist` | C | Trimestral + oportunidade nova |
| `dev-partnership-coordinator` | B/A/C | Inicio de sprint quinzenal |
| `exit-restaurante` | Z | Inicial + atualizacao semanal |

## Comandos (a implementar)

- `/novo-lead` — captura lead novo, aciona `construcao-landscape-pm`
- `/faturar-job` — emite invoice via MCP, aciona `construcao-landscape-pm`
- `/relatorio-pipeline` — snapshot atual, aciona `construcao-landscape-pm`
- `/status-exit-restaurante` — atualiza kanban venda, aciona `exit-restaurante`

## Configuracao

Credenciais via env vars do MCP server (`.env` no diretorio do MCP). Ver `../../mcp/construcao-landscape-mcp/.env.example`.

## Live Artifacts

Iniciais (criar conforme primeiro uso):

- `live-artifacts/pipeline-construcao.html` — kanban lead → estimate → schedule → invoice → cobranca
- `live-artifacts/dashboard-receita-pessoal.html` — quanto falta pra $10k/mes
- `live-artifacts/exit-restaurante.html` — kanban venda restaurante + cronograma
- `live-artifacts/vps-positioning.html` — analise competitiva

## Conexoes

- ADR: `wiki/clients/business-accelerator/thiago-docarmo/adr.md` (no repo da empresa-mae)
- Convencao agentes: `.claude/CONVENCAO-AGENTES.md`
- MCP server: `.claude/mcp/construcao-landscape-mcp/`
