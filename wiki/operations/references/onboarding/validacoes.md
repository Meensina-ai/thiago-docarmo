# Validacoes - Onboarding Aluno

Regex e helpers de validacao usados nos 5 blocos da skill.

## CNPJ (Bloco 1)

```python
import re

def validar_cnpj(cnpj_raw: str) -> tuple[bool, str]:
    """
    Aceita: 12.345.678/0001-90 ou 12345678000190
    Rejeita: CPF (11 digitos), strings com letras
    Retorna: (valido, formatado)
    """
    # Limpar
    digits = re.sub(r'\D', '', cnpj_raw)

    if len(digits) != 14:
        return False, ''

    # Formatar XX.XXX.XXX/XXXX-XX
    formatted = f'{digits[:2]}.{digits[2:5]}.{digits[5:8]}/{digits[8:12]}-{digits[12:]}'

    # Validacao de digito verificador (opcional, mas recomendado)
    # ... algoritmo modulo 11 ...

    return True, formatted
```

Regex simples (aceita 14 digitos com ou sem mascara):
```
^\d{2}\.?\d{3}\.?\d{3}\/?\d{4}-?\d{2}$
```

## Email (Bloco 1)

```
^[^@\s]+@[^@\s]+\.[^@\s]+$
```

## WhatsApp BR (Bloco 1)

Aceita variacoes:
- `+55 (11) 98765-4321`
- `+55 11 98765-4321`
- `(11) 98765-4321`
- `11987654321`

```
^\+?55?\s?\(?(\d{2})\)?\s?9?\d{4}-?\d{4}$
```

Helper Python:
```python
def normalizar_whatsapp(raw: str) -> str:
    digits = re.sub(r'\D', '', raw)
    # Remove +55 se houver
    if digits.startswith('55') and len(digits) > 11:
        digits = digits[2:]
    if len(digits) not in (10, 11):
        return ''
    # Formatar (DD) 9XXXX-XXXX
    if len(digits) == 11:
        return f'({digits[:2]}) {digits[2:7]}-{digits[7:]}'
    return f'({digits[:2]}) {digits[2:6]}-{digits[6:]}'
```

## GitHub Username (Bloco 1)

Regex GitHub oficial:
```
^[a-zA-Z0-9](?:[a-zA-Z0-9]|-(?=[a-zA-Z0-9])){0,38}$
```

Validacao online:
```bash
# Retorna 200 se existe, 404 se nao
gh api users/<username> --silent && echo "valido" || echo "invalido"
```

## Slug Empresa (Bloco 1)

```python
import unicodedata
import re

def gerar_slug(nome: str) -> str:
    # Remove acentos
    nome = unicodedata.normalize('NFKD', nome).encode('ascii', 'ignore').decode()
    # Lowercase
    nome = nome.lower()
    # Substitui nao-alfanumerico por hifen
    nome = re.sub(r'[^a-z0-9]+', '-', nome)
    # Remove hifens nas pontas
    nome = nome.strip('-')
    return nome

# "Padaria do Joao S.A." → "padaria-do-joao-s-a"
# "BBK Cleaners LLC" → "bbk-cleaners-llc"
```

## Timezone (Bloco 3)

Mapeamento cidade brasileira → timezone:

| Estado | Timezone |
|---|---|
| AC | America/Rio_Branco |
| AM, RR | America/Manaus |
| MT, MS, RO | America/Cuiaba |
| Resto do Brasil | America/Sao_Paulo |
| Fernando de Noronha | America/Noronha |

Default seguro: `America/Sao_Paulo`.
