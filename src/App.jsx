import React, { Fragment } from 'react'
import './assets/css/base/base.css'
import Home from './paginas/Home'
import Sobre from './paginas/Sobre'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Pagina404 from './paginas/Pagina404'
import Cabecalho from './components/Cabecalho'
import Post from './paginas/Post'
import Categoria from './paginas/Categoria'
function App() {
  // const Router = () => {
  //   // A const location pega pega o caminho da URL, ou seja, a parte depois da '/'
  //   const location = window.location.pathname
  //   if (location === '/sobre') {
  //     return <Sobre />
  //   } else {
  //     return <Home />
  //   }
  // }

  return (
    <Fragment>
      {/* TAG Router indica que vamos trabalhar com sistema de rotas */}
      <Router>
      <Cabecalho />
        {/* O Switch garante que somente uma das opções serão escolhidas */}
        <Switch> {/* Content */}
          <Route exact path='/'>
            <Home />
          </Route>
          {/* Necesista do exact pois caso contrário renderiza o componente Home também, por ter a '/' no nome */}
          <Route path='/sobre'>
            <Sobre />
          </Route>
          <Route path='/categoria/:id'>
            <Categoria />
          </Route>
          <Route path='/posts/:id'>
            <Post />
          </Route>
          <Route> {/* Qualquer rota que não sejam as acimas cairá na página seguinte, pois ela não possui path */}
            <Pagina404 />
          </Route>
        </Switch>
      </Router>
      
    </Fragment>
  )
}

export default App
