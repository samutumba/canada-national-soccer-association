import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'

function MyApp({ Component, pageProps }: AppProps) {
  return <>
    <Head>
      <link rel="preconnect" href="https://fonts.googleapis.com"></link>
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin=""></link>
      <link href="https://fonts.googleapis.com/css2?family=DynaPuff&family=Gantari:wght@300;400&family=Poppins:wght@300;600;700&display=swap" rel="stylesheet"></link>
      <title>Canadian National Soccer Association</title>
    </Head>
    <div className=' font-paragraph '> <Component {...pageProps} /></div>
   
  </>
}

export default MyApp
