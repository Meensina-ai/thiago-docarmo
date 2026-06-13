# Roberts Landscape — Expansão Plymouth + Playbook de Fechamento

> Agente: Rodrigo (Sales Intelligence) | Data: 2026-06-13
> Fatos geográficos/portal = verificados (fontes públicas: town of Plymouth, Wikipedia, OpenGov/ViewPoint). Suposições marcadas [SUPOSIÇÃO]. Nenhum dado interno do cliente inventado.

---

## PARTE A — PROSPECÇÃO EM PLYMOUTH

### A1. Bairros premium a priorizar (ordem)
Plymouth está em Plymouth County. Cidade enorme em área — mirar bolsões, não "Plymouth" inteira.

| Prioridade | Área | Zip | Por que |
|---|---|---|---|
| 1 | The Pinehills | 02360 | Comunidade planejada upscale, ~3.065 casas no plano, +1.000 por construir. 11 builders (Toll Brothers, Pulte, Polhemus Savery DaSilva, The Green Company, Kistler & Knapp). New construction contínua = MAIOR alvo B2B. |
| 2 | Cedarville | 02360 | Sul de Plymouth, waterfront/lake + segunda residência premium. |
| 3 | Manomet | 02345 | Bairro costeiro, cliffs com vista de oceano, waterfront + additions. Zip próprio. |
| 4 | White Horse Beach | 02381 | Enclave costeiro em Manomet, alta densidade de vacation homes premium na orla. |
| 5 | Chiltonville | 02360 | Histórico, lotes grandes, dinheiro antigo — mercado de renovation. |
| 6 | Plymouth Harbor / Warren Ave waterfront | 02360 | Orla histórica do centro, alto valor à beira-mar. |

[SUPOSIÇÃO] A maioria de Plymouth divide o zip 02360 — ele NÃO segmenta bairro. Pra segmentar dentro do 02360 use street/subdivision name. Só Manomet (02345) e White Horse Beach (02381) têm zip próprio — usar em geo-targeting de ads.

### A2. Onde achar os leads
1. PERMITS — VERIFICADO. Portal OpenGov/ViewPoint Cloud: https://plymouthma.viewpointcloud.com/ . Depto: Inspectional Services, 26 Court St, Plymouth 02360, town hall 508-747-1620. Registros em plymouth-ma.gov/478/Building-Permits-Issued. Extrair: new construction, additions, pools, decks/patios, demolition (=rebuild). Filtrar por valor alto + áreas-alvo. Operacionalizar via /permit-scraper, cadência semanal.
2. CASAS VENDIDAS — janela 0-12 meses pós-compra. Fontes: Plymouth County Registry of Deeds (público) + Zillow/Redfin. [SUPOSIÇÃO] sem fonte automatizada aqui; vira tarefa de /permit-scraper ou assinatura PropStream/Redfin.
3. BUILDERS DO PINEHILLS (B2B, maior alavanca) — 11 builders construindo continuamente. Fechar 1-2 como conta recorrente > 20 leads avulsos. Alvos de ticket alto: Polhemus Savery DaSilva, Kistler & Knapp. Pitch: "preferred landscape partner pra entregas no Pinehills". Entrar pelo Pinehills sales center + builders.
4. REALTORS PREMIUM — indicam pré/pós-venda (curb appeal, novo dono).

### A3. Gatilhos (quente → frio)
1. New construction no Pinehills — quente.
2. Casa waterfront vendida (Manomet/White Horse Beach/Harbor) — quente.
3. Permit de addition/pool/major reno em área-alvo — quente.
4. Demolition permit em bairro premium — morno (timing futuro).
5. Casa estabelecida vendida em Chiltonville — morno.

### A4. Volume estimado/mês
[SUPOSIÇÃO — estimativa de mercado, não dado do cliente]
- Permits relevantes áreas-alvo: 15-30 brutos → 3-6 qualificados/mês
- Sold premium (6 áreas): 20-40 → 2-4 qualificados/mês
- B2B Pinehills: 1-2 contas/trimestre, cada uma = fluxo contínuo
Total realista: ~5-10 leads qualificados/mês residencial + upside B2B Pinehills (1 builder pode dobrar a operação). Adiciona 30-50% ao baseline de 10-30 leads/mês sem canibalizar Cape Cod/South Shore.
Sequência: mês 1-2 = B2B Pinehills + ligar permit-scraper nas 6 áreas. Residencial avulso vem de brinde.

---

## PARTE B — PLAYBOOK DE FECHAMENTO

### B1. BANT adaptado (premium, sem espantar)
- Need/Scope: "Tell me about the space — what's not working right now, and what would the dream version look like?"
- Budget: "Projects like this range a lot depending on materials and scale. Do you have a range in mind, or would it help if I walk you through what different levels of investment look like?"
- Authority: "Will anyone else be weighing in on the final decision — a partner, an architect, the community association?"
- Timing: "Is there a date you're hoping to enjoy this by? A summer, an event, selling the house?"
Regra: nunca dê preço por telefone antes de escopo + ancoragem. "I'd hate to throw out a number that's wrong for what you actually want — let's get me out there to see it."

### B2. Ler sinais — ticket alto vs job pequeno
TICKET ALTO (dono vai): endereço em área-alvo; fala em transformação total/hardscape; menciona arquiteto/builder; casa nova/recém-comprada; pergunta processo e portfólio (não preço); sem pressa por número.
JOB PEQUENO (triagem/declinar): pede preço de cara; "quick cleanup/mow"; compara 5 orçamentos; fonte de baixa intenção; foco em "cheapest".

### B3. Site visit / sales call consultiva
Fase 1 Descoberta (15-20 min, ouvir 80%): walk the property COM o cliente, ele narra. "Walk me through how you use this space today... and how you wish you could." Descobrir emoção (entreter/privacidade/valorizar/orgulho). Tomar notas visíveis.
Fase 2 Ancoragem (antes de número): reframe custo→investimento "this isn't an expense, it's the part of the property you actually enjoy." Portfólio comparável NA REGIÃO. Ancorar alto: visão completa antes de cortar; oferecer faseamento (protege ticket, dá controle).
Fase 3 Próximos passos: nunca "I'll send you a quote." Fechar com data + alternativa fechada: "I'll have the design concept and investment range to you by [day]. Let's get 15 minutes Thursday or Friday — which works better?"
[SUPOSIÇÃO] assume design+build com deliverable intermediário; se for só install, comprimir fase 3.

### B4. Objeções
1. "Expensive" → "We're not the cheapest in Plymouth. You're paying for done once, done right, still great in ten years... we can phase this to fit your budget. Where would you want to start?" (faseamento, não desconto)
2. "Too long" → "Premium work has a real timeline... I'd rather give you a date I can hit than one that slips. Here's the schedule and how I keep you updated." (prazo = qualidade + previsibilidade)
3. "Need to think" → "Fair. Is it the design, the timing, or the number you want to sit with? So Thursday I bring exactly what you need." (descobrir objeção real, manter follow-up)
4. "Getting other quotes" → "Smart. Just make sure they're quoting the same scope and material grade — that's where cheap numbers come from. Happy to walk our spec line by line." (reposiciona em escopo/qualidade)
5. "Ballpark over the phone?" → "I could, but I'd probably be wrong in a way that helps neither of us. Give me 30 minutes on site and I'll give you a number I stand behind." (protege a site visit)

---

## Prioridade 30 dias
1. Ligar /permit-scraper nas 6 áreas via OpenGov, cadência semanal.
2. Atacar B2B Pinehills — outreach pros luxury builders (Polhemus Savery DaSilva, Kistler & Knapp) + sales center. Maior ROI.
3. Adotar playbook B1/B2 já no próximo lead inbound.
