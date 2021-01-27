import React from 'react';
import Layout from '../components/Layout'
//import type from store
import { SET_USER_MESSAGE, SET_USERS } from '../store'
import { useSelector, useDispatch } from 'react-redux'
import Link from 'next/link'

function Users({ usersProps }) {

    //Define state from reducer
    const { userMessage } = useSelector(state => state.userReducer);

    //Define useDispatch
    const dispatch = useDispatch();

    //Dispatching users state from props
    React.useEffect(() => dispatch({type: SET_USERS, payload: usersProps}), [usersProps])

    //Define function to change 
    const handleChange = e => dispatch({type: SET_USER_MESSAGE, payload: e.target.value});

    return (
        <Layout>
            <Link href="/">Back to Home</Link>
            <h1>Users</h1>
            <div>
                <input 
                    type="text"
                    onChange={handleChange}
                    placeholder="Change user message"
                />
            </div>
            <h1>{userMessage}</h1>

            <div style={{marginTop: '20px'}}>
                <h3>* Data get from ServerSideProps</h3>
            </div>
            {usersProps.map((item, index) => {
                return <p key={index}>{index + 1}. {item.name}</p>
            })}
        </Layout>
    )

}

export default Users;

export async function getServerSideProps(ctx) {
    let data = await fetch("https://jsonplaceholder.typicode.com/users")
    let users = await data.json();
    return {
        props: {usersProps: users}
    }
}

