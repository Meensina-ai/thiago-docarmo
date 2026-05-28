# Empresa AI — Thiago doCarmo

Repositório central da Empresa AI de Thiago doCarmo. Aqui vivem o CEO orquestrador, os agentes, os squads, o wiki estratégico e os scripts operacionais.

---

## Como começar

1. Leia o roteiro de instalação em `KIT-INSTALACAO.md`.
2. Copie `.env.example` pra `.env` e preencha os secrets do seu negócio.
3. Abra o repo no Claude Code (`claude code` no diretório).
4. Na primeira interação, o CEO vai rodar o **PROTOCOLO DE ONBOARDING** automático (perguntas de diagnóstico).
5. Em sessões seguintes, basta abrir o Claude Code — o CEO lê o estado do wiki e orienta a próxima ação.

---

## Estrutura do repositório

```
.
├── CLAUDE.md                   # Instrução-mãe do CEO orquestrador
├── .claude/
│   ├── agents/                 # Definições dos agentes funcionais
│   ├── skills/                 # Skills reutilizáveis
│   ├── commands/               # Slash commands (/salva, /boa-noite, etc)
│   └── settings.json           # Permissões + hooks (NUNCA commitar settings.local.json)
├── wiki/
│   ├── hot.md                  # Cache quente (prioridades + alertas)
│   ├── index.md                # Catálogo mestre
│   ├── log.md                  # Diário operacional
│   ├── operations/             # lessons, decisions, pendências
│   ├── sessoes/                # Relatório por sessão + ultima.md
│   ├── content/                # audience, brand-voice, calendário
│   ├── products/               # Uma página por produto
│   ├── clients/                # Clientes do dono (se B2B)
│   └── team/                   # Departamentos, agentes, squads
├── scripts/                    # Automações Python/Shell
├── .env.example                # Template de variáveis (copiar pra .env)
└── .gitignore                  # Cobertura de secrets
```

---

## Stack

- **Claude Code** — IDE + orquestrador AI principal
- **VS Code / Cursor** — editor (com extensão Claude Code)
- **Obsidian** — visualização gráfica do wiki (modo leitura)
- **GitHub** — repositório privado, backup automático via `/salva` e `/boa-noite`
- **Supabase** (opcional) — Edge Functions e dados estruturados do negócio
- **Ollama / LLMs locais** — DeepSeek, Qwen, Hermes rodando local em VPS própria
- **Telegram bot** — comunicação rápida com o time AI

---

## Princípios operacionais

1. **CEO orquestra, não executa.** Quando você pede algo, o CEO delega pro agente certo.
2. **Salvar memória todo dia.** Use `/salva` no meio do dia e `/boa-noite` no fim do dia pra commitar o estado da empresa AI no GitHub.
3. **Acentuação completa em tudo que o público vê.** Sem hífens (—) em copy de redes sociais.
4. **Lessons.md é lei.** Erros catalogados não se repetem. CEO lê antes de cada ação importante.
5. **Dados estáveis vivem no CLAUDE.md.** Renomeação de agente, regras do negócio, contas — tudo no lar permanente, não em arquivos voláteis.

---

## Slash commands principais

| Comando | Uso |
|---------|-----|
| `/salva` | Fechar sessão no meio do dia (commit + push, sem atualizar hot/log) |
| `/boa-noite` | Última sessão do dia (fechamento completo + resumo) |
| `/skill-creator` | Criar agente ou skill novo |
| `/sofia` | Hub de comunicação com o time humano |
| `/marcos` | CFO — financeiro, runway, custos |

Lista completa em `CLAUDE.md` seção `## AGENTES DA EMPRESA AI`.

---

## Suporte

Suporte técnico via canal acordado no contrato.

---

Empresa AI — Thiago doCarmo
