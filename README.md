# TODO List 📝
## Descrição do Projeto
O TODO List é uma aplicação web projetada para gerenciar tarefas. Com ele, você pode criar, visualizar, editar e excluir suas tarefas de forma simples e intuitiva. Este projeto foi desenvolvido para praticar e demonstrar habilidades no desenvolvimento web, tanto no front-end quanto no back-end.
 
## Tecnologias Usadas 🛠️
> ## Back-end
> - Node.js: Ambiente de execução para JavaScript no servidor.
> - Express.js: Framework para criar o servidor e gerenciar as rotas da aplicação.
> - MySwQL: Sistema de gerenciamento de banco de dados relacional para armazenar as tarefas.
> - Sequelize: ORM para facilitar a interação com o banco de dados MySQL.
> - Nodemon: Ferramenta para desenvolvimento que reinicia automaticamente o servidor sempre que há mudanças no código.

> ## Front-end
> - React.js: Biblioteca JavaScript para construção de interfaces de usuário.
> - Styled Components: Biblioteca para estilizar componentes React utilizando CSS-in-JS, permitindo que o CSS seja escrito diretamente no componente.
> - Axios: Biblioteca para fazer requisições HTTP, utilizada para comunicação com o back-end.

## Como Baixar o Projeto 🚀

Clone o repositório:
```
git clone https://github.com/KaikeCarmona/TODO_LIST.git

```

Navegue até a pasta do projeto:
```
cd TODO_LIST

```
Instale as dependências do back-end:
```
cd todo_list_back

npm install

npm install nodemon

npm install express

npm install cors

npm install sequelize

```
Instale as dependências do front-end:
```
cd ../todo_list_front

npm install

npm install styled-components

npm install axios
```

## Como Configurar o Banco de Dados no MySQL Workbench 🗄️
1. Crie um banco de dados:

- Abra o MySQL Workbench e conecte-se ao seu servidor MySQL.
- Execute o seguinte comando SQL para criar o banco de dados:
 ```
CREATE DATABASE todo_list_db;

```
2. Configure o Sequelize para conectar ao banco de dados:

- No arquivo config/config.json na pasta do back-end, ajuste as configurações de conexão:
```
{
  "development": {
    "username": "seu_usuario",
    "password": "sua_senha",
    "database": "todo_list_db",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}

```
3. Execute as migrações para criar as tabelas:

No diretório do back-end, execute:
 ```
npx sequelize db:migrate

```
Isso criará as tabelas necessárias no banco de dados.

4. Inicie o servidor do back-end:

 ```
npm start

```
5. Inicie o front-end:

- Navegue até a pasta todo_list_front e execute:
 ```
npm start

```

Pronto! O projeto estará rodando localmente e você poderá acessá-lo no navegador. 🌟

