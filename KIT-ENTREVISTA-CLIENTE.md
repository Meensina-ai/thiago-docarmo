# Kit de Entrevista — Onboarding Cliente BA

> Roteiro pra Fábio conduzir nas reuniões iniciais com cliente novo. **Grave a reunião** (Zoom, Google Meet ou áudio direto). A transcrição via Whisper alimenta automaticamente o `meu-negocio/perfil.md` do cliente.

**Tempo total estimado:** 30 a 45 minutos.

**Estrutura:** 15 perguntas em 6 blocos. Uma pergunta por vez.

---

## Bloco 1 — Identificação (5 min)

### Pergunta 1
Qual o nome do seu negócio e há quanto tempo está no mercado?

> Exemplo de resposta esperada: "Decorz Flooring, 8 anos."

### Pergunta 2
Em qual cidade, estado e país você opera?

> Exemplo: "Roseville, Califórnia, EUA. Atendo Roseville e cidades vizinhas num raio de 30 milhas."

### Pergunta 3
Em qual idioma você se comunica com seus clientes hoje?

> Opções: Português, Inglês, Espanhol, Bilíngue (especificar quais).

---

## Bloco 2 — Produto e cliente (10 min)

### Pergunta 4
Qual seu produto ou serviço principal e qual o ticket médio?

> Exemplo: "Instalação de piso de madeira engenheirada e laminado. Ticket médio $3.500 por residência."

### Pergunta 5
Descreva seu cliente ideal: faixa etária, renda aproximada, profissão, geografia, dor principal.

> Exemplo: "Casal de 35 a 50 anos, renda combinada $80k a $150k/ano, donos de casa em áreas residenciais, estão reformando ou comprando casa nova. Dor principal é não saber em quem confiar pra fazer instalação direito."

---

## Bloco 3 — Dores e objeções (10 min)

### Pergunta 6
Quais as top 3 dores que seus clientes buscam resolver? Liste em ordem de importância.

> Exemplo:
> 1. Não sabem instalar piso direito sem estragar.
> 2. Empreiteiros desaparecem no meio do projeto.
> 3. Estouram orçamento por subestimar custos.

### Pergunta 7
Quais as top 3 objeções comuns que aparecem na sua venda?

> Exemplo:
> 1. "Tô pensando em fazer DIY pra economizar."
> 2. "Achei mais barato com outro profissional."
> 3. "Vou esperar mais um tempo, agora não é uma boa hora."

---

## Bloco 4 — Diferenciação e voz (5 min)

### Pergunta 8
Quais os diferenciais REAIS do seu negócio? Específico, não genérico.

> **Evite respostas vazias:** "atendimento de qualidade", "preço justo", "compromisso com o cliente".
>
> **Busque respostas concretas:** "Garantia de 5 anos por escrito", "Visitamos a casa antes de orçar", "Equipe própria, não terceirizo nenhuma etapa", "Devolvo a diferença se você achar mais barato em até 7 dias".

### Pergunta 9
Qual o tom da sua marca?

> 1. Formal (profissional, técnico, distância confortável)
> 2. Amigável (próximo, parceiro, gentil)
> 3. Técnico (especialista, dados, autoridade)
> 4. Inspiracional (motivador, transformador, propósito)

---

## Bloco 5 — Operação atual (5 min)

### Pergunta 10
Que ferramentas você usa hoje? Liste todas.

> Pagamento, CRM, marketing, calendário, contabilidade, agendamento, etc.

### Pergunta 11
Por quais canais seus clientes chegam hoje?

> 1. Indicação
> 2. Google (orgânico ou pago)
> 3. Redes sociais (Instagram, TikTok, Facebook)
> 4. Site próprio
> 5. Anúncios pagos
> 6. Eventos, networking, comunidade
> 7. Outro

---

## Bloco 6 — Metas e gargalo (10 min)

### Pergunta 12
Qual sua meta de faturamento nos próximos 90 dias?

> Pode ser valor mensal ou total trimestral.

### Pergunta 13
Qual seu maior gargalo hoje?

> 1. Falta de lead qualificado
> 2. Lead chega mas não fecha
> 3. Vendo mas não entrego bem (fulfillment)
> 4. Cliente cancela rápido (retenção)
> 5. Outro

### Pergunta 14
Quantas horas por semana você consegue dedicar a esse projeto de transformação com IA?

> Exemplo: 5 horas, 10 horas, 20 horas.

### Pergunta 15
O que você queria ver PRONTO em 30 dias? Vitória rápida.

> Exemplo: "Site institucional novo no ar", "30 leads qualificados gerados", "Fluxo de email automatizado funcionando", "Primeira campanha de tráfego rodando".

---

## Após a reunião (operação Fábio)

1. **Exportar gravação** como `.mp3` ou `.mp4`.
2. **Rodar Whisper** pra transcrever:
   ```bash
   whisper gravacao.mp4 --language Portuguese --model medium --output_format txt
   ```
3. **Copiar** a transcrição (.txt) para o repositório do cliente:
   ```bash
   cp gravacao.txt ~/meensinaai-ba-thiago-docarmo/meu-negocio/.transcricao-onboarding.md
   ```
4. No **Claude Desktop do cliente** (ou enviar instrução pro cliente fazer no laptop dele durante o evento):
   ```
   /gerar-perfil-do-negocio
   ```
5. Skill detecta automático **Modo A** (com transcrição) e popula `meu-negocio/perfil.md` em ~5 minutos.
6. Cliente abre o painel, dá F5, vê o perfil dele renderizado.

---

## Princípios da entrevista

| | Princípio |
|---|---|
| 1 | **Uma pergunta por vez.** Não atropele com várias na mesma frase |
| 2 | **Deixe o cliente falar.** Silêncio não é problema, deixe ele pensar |
| 3 | **Respostas específicas.** Quando ele responder genérico, peça exemplo concreto |
| 4 | **Anote palavras dele.** A voz da marca vem da boca dele, não da nossa interpretação |
| 5 | **Não interrompa pra explicar nosso produto.** Hoje é dele, é discovery |
| 6 | **Grave sempre.** Transcrição é o que alimenta o perfil automático |

---

## Checklist final pós-reunião

- [ ] Gravação salva
- [ ] Transcrição gerada via Whisper
- [ ] Arquivo `.transcricao-onboarding.md` no repositório do cliente
- [ ] Cliente rodou `/gerar-perfil-do-negocio`
- [ ] `meu-negocio/perfil.md` populado nas 9 seções
- [ ] Cliente abriu o painel e viu o perfil renderizado
- [ ] Próxima ação combinada com cliente: rodar `/plano-de-acao-90-dias`
