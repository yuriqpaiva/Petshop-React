import React, { useEffect, useState } from 'react'
import { busca } from '../api/api'
import '../assets/css/post.css'
import { useParams, useHistory } from 'react-router'

const Post = () => {
    const { id } = useParams()
    const [post, setPost] = useState({})
    let history = useHistory()

    useEffect(() => {
        busca(`/posts/${id}`, setPost).catch(   // Estou pegando o erro 404 e tratando-o, dando um push para a página de erro que criei ('/404')
            () => {
                history.push('/404')
            }
        )
    }, [history, id])

    return (
        <main className='container flex flex--centro'>
            <article className='cartao post'>
                <h2 className='cartao__titulo'>{post.title}</h2>
                <p className='cartao__texto'>{post.body}</p>
            </article>
        </main>
    );
}

export default Post