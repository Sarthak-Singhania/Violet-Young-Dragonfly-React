import React from 'react'
import Head from 'next/head'

import Header from '../components/header'

const Category = (props) => {
  return (
    <>
      <div className="category-container">
        <Head>
          <title>category - Assemblage</title>
          <meta property="og:title" content="category - Assemblage" />
        </Head>
        <Header rootClassName="header-root-class-name"></Header>
      </div>
      <style jsx>
        {`
          .category-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
        `}
      </style>
    </>
  )
}

export default Category
