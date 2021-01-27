import React from 'react'
import Layout from '../components/Layout';
import Link from 'next/link'
import { useSelector, useDispatch } from 'react-redux'
//Define and Type;
import { SET_POSTS, SET_POST_MESSAGE, SET_RESET } from '../store'

function Posts({ postsProps }) {

    //Defien dispatch
    const dispatch = useDispatch();

    //Define state from postReducer
    const { postMessage } = useSelector(state => state.postReducer);

    //Define function to change postMessage
    const handleChange = e => dispatch({type: SET_POST_MESSAGE, payload: e.target.value})

    //Define function to reset postMessage
    const handleClick = () => dispatch({type: SET_RESET})

    //Dispatch posts
    React.useEffect(() => dispatch({type: SET_POSTS, payload: postsProps}), [postsProps])

    return(
        <Layout>
        <Link href="/">Back to Home</Link>
        <h1>Posts</h1>
        <div>
            <input 
                type="text"
                onChange={handleChange}
                placeholder="Change user message"
            />
        </div>
        <h1>{postMessage}</h1>
        <button type="button" onClick={handleClick}>Reset Message</button>
        <div style={{marginTop: '20px'}}>
            <h3>* Data get from StaticProps</h3>
        </div>
        {postsProps.map((item, index) => <p key={index}>{index + 1}. {item.title}</p>)}
    </Layout>
    )
}

export default Posts;

export const getStaticProps = async (ctx) => {
    let data = await fetch("https://jsonplaceholder.typicode.com/posts")
    let posts = await data.json();
    return {
        props: {postsProps: posts}
    }
}