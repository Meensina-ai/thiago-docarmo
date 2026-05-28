---
tags:
  - operacional
  - permanente
---

# Lessons — Erros pra Não Repetir

> Adicionar aqui toda vez que um erro acontecer e a causa for clara. Formato: data + erro + causa + custo + correção.

## 2026-05-28 — "Repository not found" não significa repo inexistente
- **Erro:** no push falhar com `remote: Repository not found`, concluí que o repo remoto não existia e registrei pendência pra "criar o repo".
- **Causa:** o repo era PRIVADO e o git tentava acesso anônimo (sem token). O GitHub esconde repos privados retornando "not found" em vez de "permission denied", por segurança.
- **Custo:** diagnóstico errado momentâneo; quase pedi pro dono criar um repo que já existia.
- **Correção:** quando push der "Repository not found", ANTES de assumir que não existe, checar `gh auth status` e rodar `gh auth setup-git` pra usar o token do gh como credential helper. Só depois concluir.
