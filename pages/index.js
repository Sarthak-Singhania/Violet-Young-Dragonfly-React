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
        <span className="top-bar">
          <span>
            For customizations or personal assistance, WhatsApp us at
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <a
            href="https://api.whatsapp.com/send?phone=918920651205&amp;text=Hi!%20Could%20you%20help%20me%20with%20a%20few%20queries!"
            target="_blank"
            rel="noreferrer noopener"
            className="home-link"
          >
            +91 8920651205
          </a>
        </span>
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
          .home-link {
            color: #e83647;
          }
        `}
      </style>
    </>
  )
}

export default Home
