import React, { Fragment, useEffect, useState } from 'react'
import { Link, Route, Switch, useParams, useRouteMatch, useHistory} from 'react-router-dom'
import { busca } from '../api/api'
import '../assets/css/blog.css'
import ListaCategorias from '../components/ListaCategorias'
import ListaPost from '../components/ListaPost'
import Pagina404 from './Pagina404'
import SubCategoria from './SubCategoria'

const Categoria = () => {

    const history = useHistory()
    const { id } = useParams()
    const { url, path } = useRouteMatch()
    // Pega toda extensão, ex: /categoria/comportamento 

    const [subcategorias, setSubCategorias] = useState([])

    useEffect(() => {
        busca(`/categorias/${id}`, (categoria) => {
            setSubCategorias(categoria.subcategorias)
        }).catch(() => {
            history.push('/404')
        })
    }, [history, id])

    return (
        <Fragment>
            <div className="container">
                <h2 className="titulo-pagina">Pet Notícias</h2>
            </div>
            <ListaCategorias />
            <ul className="lista-categorias container flex">
                {subcategorias.map((subcategoria) => {
                    return (
                        <li className={`lista-categorias__categoria lista-categorias__categoria--${id}`} key={subcategoria}>
                            <Link to={`${url}/${subcategoria}`}>
                                {subcategoria}
                            </Link>
                        </li>
                    );
                })
                }
            </ul>
            <Switch>
                <Route exact path={`${path}/`}>
                    <ListaPost url={`/posts?categoria=${id}`} />
                </Route>
                <Route path={`${path}/:subcategoria`}>
                    <SubCategoria />
                </Route>
                <Route>
                    <Pagina404 />
                </Route>
            </Switch>
        </Fragment>
    )
}

export default Categoria