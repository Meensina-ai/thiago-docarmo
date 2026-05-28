# Kit de Instalação — Empresa AI

> Roteiro pra instalar a Empresa AI no laptop do cliente novo durante o evento. **Tempo total: 60 a 90 minutos com Fábio presente pra resolver travas.**

---

## Antes de começar (cliente prepara)

- Laptop ligado e carregado
- Conexão Wi-Fi do evento
- Cartão de crédito pra Anthropic API ($5 inicial dura uns 30 dias de uso normal)

---

## Passo 1 — Instalar Claude Desktop (5 min)

- Site: **claude.ai/download**
- **Mac**: baixar `.dmg` → arrastar pra Applications
- **Windows**: baixar `.exe` → executar instalador
- Abrir Claude Desktop e fazer login com conta Anthropic (criar grátis se não tiver)

---

## Passo 2 — Instalar Git (5 min)

- **Mac**: abrir Terminal, digitar `git --version`. Se aparecer popup pedindo Xcode Command Line Tools, clicar em "Instalar" e esperar.
- **Windows**: ir em **git-scm.com/download/win** → baixar e executar com configurações padrão.

---

## Passo 3 — Receber o repositório do seu negócio (10 min)

Fábio compartilha um link único pro seu repositório no GitHub.

- **Mac**: abrir Terminal e rodar:
  ```bash
  cd ~
  git clone <link-recebido>
  ```
- **Windows**: abrir Git Bash (instalado junto com Git) e rodar o mesmo comando acima.

Você vai ter uma pasta nova no seu computador com o nome do seu negócio.

---

## Passo 4 — Conectar o repositório ao Claude Desktop (5 min)

- Abrir Claude Desktop
- Menu: **File > Open Folder**
- Selecionar a pasta que você acabou de baixar
- Pronto. Claude Desktop agora está apontando pra sua Empresa AI.

---

## Passo 5 — Configurar a chave da Anthropic (5 min)

- Em Claude Desktop, ir em **Settings > API Keys**
- Colar a chave que Fábio te entregar
- Salvar e fechar Settings
- Você verá conexão verde "Connected"

---

## Passo 6 — Onboarding do seu negócio (30 min)

Em Claude Desktop, com sua pasta aberta, digitar no chat:

```
/gerar-perfil-do-negocio
```

A skill conduz 15 perguntas em 6 blocos, uma de cada vez. Responda direto, sem pressa. Esse perfil alimenta todos os 54 agentes do seu time de IA.

Tempo: ~25 a 30 minutos.

---

## Passo 7 — Abrir o painel (1 min)

- Na pasta do seu repositório, encontrar o arquivo **`painel.html`**
- Duplo clique → abre no seu navegador padrão
- **Atalho recomendado**: arrastar `painel.html` pra área de trabalho como atalho. Vira sua "central de comando" diária.

---

## Você está pronto.

A partir de agora, sua Empresa AI tem:

- ✅ Perfil do negócio salvo e lido por todos os agentes
- ✅ 54 agentes especializados prontos pra executar
- ✅ Painel local mostrando status do time em tempo real
- ✅ Botão "Abrir Claude" no painel pra falar com seu CEO IA quando quiser

---

## Próximos passos sugeridos

No Claude Desktop, rode os comandos abaixo conforme precisar:

| Comando | O que faz |
|---|---|
| `/plano-de-acao-90-dias` | Gera seu plano de execução de 90 dias com ~30 tarefas distribuídas em 12 semanas |
| `/ceo-novo-pedido` | Quando você tiver ideia ou pedido novo (ex: "quero criar campanha de feriado") |
| `/atualizar-portal` | Quando Fábio avisar que tem versão nova do sistema |
| `/reverter-portal` | Se algum update novo não funcionar bem, volta pra versão anterior |

---

## Se algo travar durante a instalação

Fábio está no evento pra ajudar. Levante a mão. Os 5% de casos que dão problema costumam ser:

- Permissão de admin no Mac pedindo senha (digite a sua)
- Antivírus do Windows bloqueando Git (libere uma vez)
- Wi-Fi instável pra baixar o repositório (aguarde ou reconecte)
- Conta Anthropic sem cartão cadastrado (cadastre durante o passo 5)

Tudo previsível. Tudo resolvível em 2 minutos.

---

**Bem-vindo à Empresa AI. **
