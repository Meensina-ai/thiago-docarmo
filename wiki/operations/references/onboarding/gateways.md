# Gateways de Pagamento BR - Referencia Rapida

Usado pelo Bloco 4 da skill onboarding-aluno pra calibrar `agente-emissao-boletos-locacao.md`.

## Asaas (recomendado pra PME)

- **URL:** https://asaas.com
- **Docs:** https://docs.asaas.com/
- **Auth:** API Key (header `access_token`)
- **Suporta:** Boleto, PIX, Cartao, Assinatura recorrente
- **Webhook:** Sim, configurado em https://app.asaas.com/config/webhooks
- **Custo tipico:** R$ 1,99/boleto, 0,99% PIX, ~3% cartao
- **Quando recomendar:** PME que emite < 5.000 cobrancas/mes, quer simplicidade
- **API endpoint base:** `https://api.asaas.com/v3/`

Endpoint chave pra agente-emissao-boletos:
```
POST /v3/payments
{
  "customer": "cus_xxx",
  "billingType": "BOLETO",
  "value": 100.00,
  "dueDate": "2026-06-01",
  "description": "Aluguel maio/2026"
}
```

## Sicoob (cooperativa, popular em locacao)

- **URL:** https://developers.sicoob.com.br/
- **Auth:** OAuth 2.0 + certificado digital A1/A3 (.pfx ou .p12)
- **Suporta:** Boleto cobranca CNAB 240, PIX, Conta corrente
- **Custo tipico:** R$ 0,75-1,50/boleto (varia por cooperativa)
- **Quando recomendar:** Cliente que ja e cooperado, volume > 1000/mes, quer custo baixo
- **Complexidade:** Media-alta (requer certificado, sandbox limitado)
- **API endpoint base:** `https://api.sicoob.com.br/cobranca-bancaria/v3/`

Pendencia comum: aluno nao tem certificado digital ainda.

## Itau API (banco grande, custo alto pra PME)

- **URL:** https://devportal.itau.com.br/
- **Auth:** OAuth 2.0 + mTLS (certificado)
- **Suporta:** Boleto, PIX, TED
- **Custo tipico:** R$ 2-5/boleto + tarifa mensal
- **Quando recomendar:** Cliente medio/grande que ja tem conta Itau PJ ativa
- **Complexidade:** Alta

## Inter API (gratuito ate volume baixo)

- **URL:** https://developers.bancointer.com.br/
- **Auth:** OAuth 2.0 + certificado mTLS
- **Suporta:** Boleto, PIX, Cobranca
- **Custo tipico:** Gratuito ate 100 boletos/mes, depois R$ 1-3
- **Quando recomendar:** Volume baixo (< 100/mes), cliente quer custo zero inicial
- **Complexidade:** Media

## Decisao no Bloco 4

Se aluno responde:
- `asaas` → calibracao direta, gateway pronto
- `sicoob` → criar pendencia "Confirmar certificado A1 ativo"
- `itau-api` → criar pendencia "Validar conta Itau PJ + certificado"
- `inter-api` → calibracao direta, gateway pronto
- `nenhum` → criar pendencia "Decidir gateway antes da sessao 2 - recomendado Asaas pra comecar"

## WhatsApp Business API - Referencia paralela (Bloco 4)

| Provedor | Custo | Quando |
|---|---|---|
| Z-API | R$ 100-200/mes | Comeco rapido, sem aprovacao Meta |
| Twilio | $0.005/msg + setup | Volume alto, integracao internacional |
| Meta oficial | Variavel | Cliente quer botao verificado, volume grande |
| Pendente | - | Aluno ainda nao decidiu |
