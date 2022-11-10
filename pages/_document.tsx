import NextDocument, { Html, Head, Main, NextScript } from 'next/document'
import React from 'react'

type Props = {}

class Document extends NextDocument<Props> {
  render() {
    return (
      <Html>
      <Head>
           
           <link rel="preconnect" href="https://fonts.googleapis.com"></link>
           <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin=""></link>
           <link href="https://fonts.googleapis.com/css2?family=DynaPuff&family=Gantari:wght@300;400&family=Poppins:wght@300;600;700&display=swap" rel="stylesheet"></link>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default Document