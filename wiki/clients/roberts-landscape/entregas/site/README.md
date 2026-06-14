# Polaris Masonry & Hardscape — Site

Site institucional multi-página. Estrutura de subpastas espelha o domínio real `polarishardscape.com`.

## Rodar no seu computador (localhost)

No terminal, dentro desta pasta `site/`:

```bash
bash serve.sh
```

Abre sozinho em **http://localhost:8000/**. Pra parar: `Ctrl+C`.
(Alternativa manual: `python3 -m http.server 8000`)

## Páginas

| URL | Arquivo |
|-----|---------|
| `/` | `index.html` |
| `/masonry` | `masonry/index.html` |
| `/patios-walkways` | `patios-walkways/index.html` |
| `/retaining-walls` | `retaining-walls/index.html` |
| `/outdoor-living` | `outdoor-living/index.html` |
| `/landscape` | `landscape/index.html` |
| `/gallery` | `gallery/index.html` |
| `/about` | `about/index.html` |
| `/contact` | `contact/index.html` |

## Antes de publicar (pendências de conteúdo/config)

1. **Fotos reais** — substituir placeholders (comentados no HTML). Gallery é o ativo de venda nº 1.
2. **Formulário** (`contact/index.html`) — trocar `action="#"` por Formspree ou request form do Jobber.
3. **Reviews reais** — os 3 da home são placeholder; puxar do Google Business Profile.
4. **Deploy** — subir esta pasta como raiz no Vercel / Netlify / Cloudflare Pages. As URLs limpas (`/masonry`, `/contact`) funcionam automaticamente.
