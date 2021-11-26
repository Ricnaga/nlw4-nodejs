# <div align="center"> NLW4 - Trilha NodeJS </div>

#### <div align="right">- Projeto Finalizado <div>

### <div align="center"> Workshop realizado pela equipe Rocketseat abordando conceitos básicos sobre: </div>

#### 1. Nodejs
#### 2. Rotas de criação e listagem de conteúdo
#### 3. Envio de email fake
#### 4. Resposta de email fake
#### 5. Banco de dados : criação e consulta
#### 6. Criação de classe customizada de erros
#### 7. Automação de testes


## <div align="center"> Sumário </div>
<!--ts-->
   - [Requisitos](#<div-align="center">Requisitos</div>)
   - [Tecnologias utilizadas](#<div-align="center">Tecnologias-utilizadas</div>)
   - [Autor](#<div-align="center">Autor</div>)
   - [Licença](#<div-align="center">Licença</div>)
<!--te-->
## <div align="center">Requisitos</div>
Para executar a aplicação é necessário instalar algumas ferramentas tais como um editor de códigos para realizar compilação dos mesmos. Nesse projeto foi utilizado o [Visual Studio Code](https://code.visualstudio.com/), [NodeJS](https://nodejs.org/en/) para compilação do código, [Git Bash](https://gitforwindows.org/) para baixar o repositório e baixar todas as dependências necessárias. Para realizar testes foi utilizado o [Insomnia](https://insomnia.rest/download/)

```bash
# Baixe o repositório.
$ git clone https://github.com/Ricnaga/nlw4-nodejs.git

# Acesse a pasta do projeto.
$ cd nlw4-nodejs

# Agora que baixou e acessou o repositório, vamos começar a instalação das dependências.
$ yarn ( caso não utilize o yarn execute apenas npm -i)

# Depois de instalado todas as dependências, abra a aplicação via vscode
$ code .

# Agore execute a aplicação.
$ yarn dev (caso não utilize o yarn: npm run dev)

# A aplicação iniciará na porta 3333 
# utilize o insomnia para executar as rotas, no insomnia as rotas são:

#POST:
-http://localhost:3333/users
no body:{"name": "username", "email": "email@dominio.com"}

-http://localhost:3333/surveys
no body:{"title":"titulo inserido", "description": "Next Level Week 4 - 2021"}

-http://localhost:3333/sendMail
no body:{"email": "email@dominio.com","survey_id":"id do resultado da rota acima"}

#GET
-http://localhost:3333/surveys
-http://localhost:3333/sendMail/"id da rota post survey"
```

##  <div align="center">Tecnologias utilizadas</div>
- [HTML](https://www.w3.org/HTML)
- [CSS](https://www.w3.org/Style/CSS/)
- [NodeJS](https://nodejs.org/en/)
- [Git Bash](https://gitforwindows.org/)
- [Yarn](https://yarnpkg.com/getting-started/install)
- [Typescript](https://www.typescriptlang.org/)
- [Express](https://expressjs.com/pt-br/starter/installing.html)
- [Handlebars](https://handlebarsjs.com/)
- [JestJS](https://jestjs.io/)
- [Sqlite](https://www.nodenpm.com/sqlite-async/package.html)


## <div align="center">Autor</div>
<div align="center">Atividade desenvolvida no evento NextLevelWeek #4(NLW4) pela equipe <a href="https://rocketseat.com.br/">Rocketseat</a>, realizados por minha pessoa.
Gostou? tem alguma sugestão de melhoria? por favor, entre em contato e ja aproveita e me adiciona.<br>
<a href="https://www.linkedin.com/in/ricardo-nagatomy-56553254"><img src="https://img.shields.io/badge/-RicardoNaga-blue?style=flat-square&logo=Linkedin&logoColor=white"></a>
<a href="https://app.rocketseat.com.br/me/ricardo-nagatomy-08130"><img src="https://img.shields.io/badge/-Rocketseat-000?style=flat-square&logo=&logoColor=white"></a>
</div>

## <div align="center">Licença</div>

<div align="center"> <img src="https://img.shields.io/github/license/Ricnaga/NLW4---NodeJS?style=for-the-badge"/> </div>
