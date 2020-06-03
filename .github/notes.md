# Notes

## Add icon na página html

```html
<head>
  <link rel="icon" href="path/name.ext">
</head>
```

## fetch()

> A API Fetch fornece uma interface JavaScript para acessar e manipular partes do pipeline HTTP, tais como os pedidos e respostas. Ela também fornece o método global fetch() que fornece uma maneira fácil e lógica para buscar recursos de forma assíncrona através da rede.
<br>

> A Promise retornada do fetch() não rejeitará o status do erro HTTP, mesmo que a resposta seja um HTTP 404 ou 500. Em vez disso, ela irá resolver normalmente (com o status ok definido como falso), e só irá rejeitar se houver falha na rede ou se algo impedir a requisição de ser completada.
<br>

> Por padrão, o fetch não enviará nem receberá cookies do servidor, resultando em solicitações não autenticadas se o site depende do uso de uma sessão de usuário (para enviar cookies, a opção credentials do  parâmetro init deve ser definida).
> [MDN](https://developer.mozilla.org/pt-BR/docs/Web/API/Fetch_API/Using_Fetch)

```js
// data -> pode ser uma url ou arquivo
fetch('data')
  // transforma a promessa em json
  .then(response => response.json())
  // faz uma operação com o json
  .then(data => {
    console.log(data)
  })
  // lida com o erro
  .catch(err => ...)
```
