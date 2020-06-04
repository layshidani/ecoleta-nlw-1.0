# :books: Notes

# FRONT_END
## HTML

### Add icon na página html

```html
<head>
  <link rel="icon" href="path/name.ext">
</head>
```

### Tags `<fieldset>` e `<legend>`

> The `<fieldset>` tag is used to group related elements in a form.
<br>

> The `<fieldset>` tag draws a box around the related elements.
> [_w3schools](https://www.w3schools.com/tags/tag_fieldset.asp)


---

## JavaScript
### fetch()

> A API Fetch fornece uma interface JavaScript para acessar e manipular partes do pipeline HTTP, tais como os pedidos e respostas. Ela também fornece o método global fetch() que fornece uma maneira fácil e lógica para buscar recursos de forma assíncrona através da rede.
<br>

> A Promise retornada do fetch() não rejeitará o status do erro HTTP, mesmo que a resposta seja um HTTP 404 ou 500. Em vez disso, ela irá resolver normalmente (com o status ok definido como falso), e só irá rejeitar se houver falha na rede ou se algo impedir a requisição de ser completada.
<br>

> Por padrão, o fetch não enviará nem receberá cookies do servidor, resultando em solicitações não autenticadas se o site depende do uso de uma sessão de usuário (para enviar cookies, a opção credentials do  parâmetro init deve ser definida).
> [_MDN](https://developer.mozilla.org/pt-BR/docs/Web/API/Fetch_API/Using_Fetch)

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

### classList

```js
itemLi.classList.toggle('selected');
```

> O **Element.classList** é uma propriedade somente leitura que retorna uma coleção DOMTokenList ativa dos atributos de classe do elemento.

> Usar classList é uma alternativa conveniente para acessar a lista de classes de um elemento como uma seqüência delimitada por espaço através de element.className.

#### Métodos

> **add**( String [, String] ): Adicione valores de classe especificados. Se essas classes já existem no atributo do elemento, elas são ignoradas.

> **remove**( String [,String] ): Remover valores de classe específicos.

> **item** ( Number ): Retorna o valor da classe por índice na coleção.

> **toggle** ( String [, force] ): Quando apenas um argumento está presente: Toggle class value; Ou seja, se a classe existir, em seguida, removê-lo e retornar false, se não, então adicioná-lo e retornar true.
> Quando um segundo argumento está presente: Se o segundo argumento é avaliado como true, adicione o valor especificado da classe e, se ele for avaliado como false, remova-o.

> **contains**( String ): Verifica se o valor da classe especificado existe no atributo de classe do elemento.

> [_MDN](https://developer.mozilla.org/pt-BR/docs/Web/API/Element/classList)

---
## CSS

* li.selected: juntos, siginifica que estamos selecionando um li que tem a classe selected.
* se fosse separado li .selected: siginificaria que estamos procurando por um elemento contido dentro das tags li, que possui a classe selected


```css
.items-grid li.selected {

}
```

---
# BACK-END

## NPM

Iniciar o projeto e incluir o arquivo `package.json`

```bash
npm init -y
```

## Criar o servidor

arquivo `server.js`:

```js
const express = require('express');
const server = express();

// configurar pasta public
// use: config servidor
server.use(express.static('public'));

// configurar caminhos (rotas)
// req: requisição, pedido
// res: reposta
server.get('/', (req, res) => {
  // para que o index.html seja enviado quando a rota / for acessada
  // __dirname: caminho da pasta de server.js
  res.sendFile(__dirname + '/views/index.html')
});

server.get('/create-point', (req, res) => {
  res.sendFile(__dirname + '/views/create-point.html')
});

// ligar o servidor
server.listen(3000);
```

### Configuração server

- instalar o `express`
- comando para rodar
    ```bash
    node src/server.js
    ```

    - porém, para que as alterações no código sejam refletidas sem ter que reestartar o servidor manualmente a cada alteração, instalamos o **nodemon** (node monitor) como **devDependece**

    `npm i nodemon -D`


    - e agora ao invés de startar o servidor através do **node**, fazemos através do **nodemon**

    ```bash
    nodemon src/server.js
    ```

    - add o comando no package.json em scripts para poder executar com o comando `npm run start`
- não esquecer de atualizar nos arquivos html, o href, já que agora não estamos direcionando para os arquivos em si diretamente, mas sim para as rotas que farão esse trabalho.
