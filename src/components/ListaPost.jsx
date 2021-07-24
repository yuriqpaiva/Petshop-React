import { busca } from '../api/api';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

const ListaPost = ({ url }) => {

    const [posts, setPosts] = useState([])

    useEffect(() => {
        busca(url, setPosts)
    }, [url])

    return (
        <section className='posts container'>
            {
                posts.map((post) => {
                    return (
                    <Link className={`cartao-post cartao-post--${post.categoria}`} key={post.id} to={`/posts/${post.id}`}> 
                        <h3 className='cartao-post__titulo'>
                            {post.title}
                        </h3>
                        <p className='cartao-post__meta'>{post.metadescription}</p>
                    </Link>
                    );
                })
            }
        </section>
    );
}

export default ListaPost