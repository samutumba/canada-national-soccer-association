import NextDocument, {
  Html,
  Head,
  Main,
  NextScript
} from 'next/document'
import React from 'react'

class MyDocument extends NextDocument {

  render() {
    return (
      <Html>
        <Head>

          {/* <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" /> */}
          <link href="https://fonts.googleapis.com/css2?family=DynaPuff&family=Gantari:wght@300;400&family=Poppins:wght@300;600;700&display=swap" rel="stylesheet" />

        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument