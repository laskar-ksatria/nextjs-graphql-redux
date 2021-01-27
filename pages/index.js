import React from 'react';
import Layout from '../components/Layout';
import Link from 'next/link';
import { useSelector } from 'react-redux'

export default function Home() {

  const LinkData = [
    {
      title: "Users Page",
      path: "/users"
    },
    {
      title: "Posts Page",
      path: "/posts"
    },
    {
      title: "GraphQL Example Page",
      path: "/graphqlsample"
    }
  ]

  return (
    <Layout>
      <p>Click sample to see example!</p>
      {LinkData.map((item, index) => {
        return (
          <div key={index} style={{margin: '5px', fontSize: '18px', fontWeight: 'bold', cursor: 'pointer'}}>
            <Link href={item.path}>
                {item.title}
            </Link>
          </div>
        )
      })}
    </Layout> 
  )
}
