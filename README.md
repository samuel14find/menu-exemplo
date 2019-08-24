This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
### Minhas Notas
Em uma Single Page Aplication é comum adicionarmos rotas na nossa aplicação de modo que a página não vai ficar atualizando 
toda hora. E para usar um conjunto de rotas vamos usar um pacote para o React com todas as funcionalidades que precisamos
para criar tais rotas. Essa pacote é o React Router.  Para esse exemplo, vou criar uma aplicação bem simples, onde vai 
ter MENUS, e ao clicar no MENU vai ir mostrando Textos abaixo desse menu, por exemplo, eu clico no menu Conta mais mostrar
o titulo Conta, no menu Home vai mostrar o texto Home. Primeiro para instalar o pacote React Route eu faço o seguinte:
-   `npm i -S react-router-dom` 

Lembrando que a opção -S tem o seguinte signiticado:
>The 'S' option is the Save option in npm. It adds the npm package to your dependencies for your project. 
>You can also add the dependency manually by editing the package.json file.

Um ponto interessante que o instrutor mencionou foi o seguinte:
> Cada Rota criada vai sempre aponta para um componente. No REACT tudo, no final, vai ser componente. 
 
Ou seja vai ser criado uma rota e essa rota sempre vai apontar para um componente. Quando começo a trabalhar com react-router, 
toda rota que eu declarar, tem que estar dentro do componente `<BrowserRouter>`  E nesse exemplo, o instrutor criou um 
menu de navegação de uma `<ul>`. **É importante destacar agora que DEVEMOS SUBSTITUIR A TAG <a> pela TAG <link>.** do 
react-router. Observe abaixo a sintaxe desse link:
```
<BrowserRouter>
    <ul>
        <li><link to="/">Home</link></li>
        <li><link to="/about">Home</link></li>
        <li><link to="/contact">Contact</link></li>
    </ul>
</BrouserRouter>
```

De acordo como instrutor O MENU não necessariamente necessita estar dentro da BrowserRouter. Aqui temos 3 links. Mas 
a questão é que devemos dizer onde vamos carregar esses links. Eles vão ser componentes, e portanto onde vamos carregar 
esses componentes. De acordo com o instrutor:
>Quando estamos navegando em uma SPA, temos o nosso MENU, e a gente de um CONTAINER que vai ser o conteúdo a ser atualizado. 
>Não vamos recarregar a tela toda, mas atualizamos parte da tela

Aí para indicar qual será a componente a ser carregar, vamos usar um outro componente do pacote react-router, que se 
chama Route. Aí eu indicando, que quando tiver determinado link, eu chamo um determinado componente. No exemplo, o instrutor 
declarou dentro do App.js mesmo os componentes exemplos. 
```
<BrowserRouter>
    <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">Home</Link></li>
        <li><Link to="/contact">Contact</Link></li>
    </ul>
    <Route exact path="/" component={Home}/>    <--
    <Route path="/about" component={About}/>    <--
    <Route  path="/contact" component={Contact}/> <--
</BrouserRouter>
```
Detalhe interessante. Para dizer que eu quero exibir um componente somente se eu tiver na rota exata, eu uso a palavra 
exact. 
É possível também usar parâmetro em Rotas. Observe abaixo:
```
<BrowserRouter>
    <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about/samuel">Home</Link></li>           <--
        <li><Link to="/contact">Contact</Link></li>
    </ul>
    <Route exact path="/" component={Home}/>    
    <Route path="/about/:name" component={About}/>              <--
    <Route  path="/contact" component={Contact}/> 
</BrouserRouter>
```
Agora esse parâmetro tem que ser capturado lá no componente About. E para essa operação vamos usar o `match` e depois 
para invocar o parâmetro passana na url vamos fazer assim `match.params.name`. Observe como ficou o componente About:
```
    function About({match}) {
      return <h3>About {match.params.name}</h3>
    }
```