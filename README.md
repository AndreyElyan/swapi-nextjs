This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

# Important!!
 npm i or npm install

First, run the development server:

```bash
npm run dev

```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

**This is your source code tree:**

```
src


|-- components
|-- containers
|-- pages
|-- styles
|-- utils
|-- test

...
```
Every item created inside components, containers, pages... will be a folder with their code, the tests file, and to keep your code simple and short you can add extra files for helpers or styles it this folder. The folder structure will look like this:

```
components
|-- YouComponent
    |-- index.ts
    |-- ComponentName.test.ts
    |-- styles.ts
    |-- // Extra files for things like helpers or styles
...
```
<br/>

# Folders description

### `./components`

Components are presentational only elements, grouping UI items


### `./pages`

Pages are mapped in routes and have all the components needed to implement a functionality


### `./utils/api`

Services are responsible to handle the connection with all external elements, like APIs

### `./utils/helpers`

Directory to keep all `helpers` functions to share all over the project

<br>


[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/import?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.


# Documentação da aplicação em PT-BR

## URL da aplicação

https://swapi-nextjs.vercel.app/films

Criada aplicação em Next, utilizando tailwind e ts para teste da empresa Ilegra, com a finalidade de ler e consumir os dados da api [https://swapi.dev/](https://swapi.dev/).

Tendo os seguintes requisitos:

• Testes unitários.
• Versionamento em repositório público (Github, Gitlab).
• Instruções para rodar o projeto (README).
• Componentes reutilizáveis.
• Aplicação responsiva.

Utilizado Vercel para deploy da aplicação


## Telas da Aplicação

* Mobile


![image](https://github.com/AndreyElyan/swapi-nextjs/blob/master/public/screenshots/mobile/home.PNG)  ![image](https://github.com/AndreyElyan/swapi-nextjs/blob/master/public/screenshots/mobile/filmedetail1.PNG)

![image](https://github.com/AndreyElyan/swapi-nextjs/blob/master/public/screenshots/mobile/search.PNG)  ![image](https://github.com/AndreyElyan/swapi-nextjs/blob/master/public/screenshots/mobile/notfound.PNG)
 

 
![image](https://github.com/AndreyElyan/swapi-nextjs/blob/master/public/screenshots/mobile/filmdetail2.PNG) ![image](https://github.com/AndreyElyan/swapi-nextjs/blob/master/public/screenshots/mobile/filmedetail1.PNG)
 

 





