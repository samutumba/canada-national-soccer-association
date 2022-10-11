import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { Toaster } from 'react-hot-toast'
import { RecoilRoot } from 'recoil'
import { SessionProvider } from "next-auth/react";

function MyApp({ Component, pageProps: { session, ...pageProps }, }: {
  Component: AppProps["Component"],
  pageProps: any
}) {
  return <>
    <Head>
      <link rel="preconnect" href="https://fonts.googleapis.com"></link>
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin=""></link>
      <link href="https://fonts.googleapis.com/css2?family=DynaPuff&family=Gantari:wght@300;400&family=Poppins:wght@300;600;700&display=swap" rel="stylesheet"></link>
      <title>Canadian National Soccer Association</title>
    </Head>
     <SessionProvider
      // Provider options are not required but can be useful in situations where
      // you have a short session maxAge time. Shown here with default values.
      session={pageProps.session}
    >
      <RecoilRoot>
      <Component {...pageProps} />
      <Toaster
        position="top-center"
        reverseOrder={false}
      />
      </RecoilRoot>
    </SessionProvider>
  </>
}

export default MyApp
