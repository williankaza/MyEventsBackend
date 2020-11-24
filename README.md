# MyEventBackend

Projeto criado para o Grupo de Estudos do GTP.

## Exemplo de requisições:

### GET - {{base_url}}/evento - Busca todos os eventos

### GET - {{base_url}}/evento/:codEvento - Busca evento pelo código

### POST - {{base_url}}/evento - Cadastra novo evento

Body
```json
{
    "codigo": "002",
    "descricao": "Natal",
    "data": "2020-12-25",
    "qtdPessoas": 1000,
    "status": 1
}
```

### PUT - {{base_url}}/evento/:codEvento - Atualiza evento pelo código

Body
```json
{
    "descricao": "Ano Nmvo",
    "data": "2021-01-01",
    "qtdPessoas": 500,
    "status": 1
}
```

### DELETE - {{base_url}}/evento/:codEvento - Exclui evento pelo código

