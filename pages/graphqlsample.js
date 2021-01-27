import Layout from '../components/Layout';
import React from 'react'
import Link from 'next/link'
import { initializeApollo } from '../apollo'
import { QUERY_SPACE, SET_SPACE_USERS } from '../store'
import { useDispatch } from 'react-redux'

function GraphSample({ users, loading }) {    

    const dispatch = useDispatch();

    React.useEffect(() => dispatch({type: SET_SPACE_USERS, payload: users}));

    return (
       <Layout>
           {loading ? <h2>Loading</h2> : ""}
            <Link href="/">Back to Home</Link>
           <h1>GraphSample</h1>
           <h3>Data from Server side Props</h3>
            {users.map((item, index) => {
                return <p key={index}>{index + 1}. {item.name}</p>
            })}
       </Layout>
    )
}

export default GraphSample;

export const getStaticProps = async () => {
    const apolloClient = initializeApollo();
    let { data, loading } = await apolloClient.query({
        query: QUERY_SPACE
    })
    return {
        props: {users: data.users, loading}
    }
}



