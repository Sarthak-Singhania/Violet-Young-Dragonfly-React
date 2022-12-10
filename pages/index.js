import React from 'react'
import Head from 'next/head'

import Header from '../components/header'

const Home = (props) => {
  return (
    <>
      <div className="home-container">
        <Head>
          <title>Assemblage</title>
          <meta property="og:title" content="Assemblage" />
        </Head>
        <Header></Header>
      </div>
      <style jsx>
        {`
          .home-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
            justify-content: flex-start;
          }
        `}
      </style>
    </>
  )
}

export default Home
