import React from 'react';
import Layout from '../components/Layout';
import Link from 'next/link';

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
            <Link key={index} href={item.path}>
              <div style={{margin: '5px', fontSize: '18px', fontWeight: 'bold', cursor: 'pointer'}}>
                    {item.title}
              </div>
            </Link>
        )
      })}
    </Layout> 
  )
}
