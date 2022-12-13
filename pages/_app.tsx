import '../styles/globals.css';
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { Toaster } from 'react-hot-toast'
import { RecoilRoot } from 'recoil'
import { Loader } from '../components'
import { Hydrate, QueryClient, QueryClientProvider, dehydrate, } from '@tanstack/react-query'
import React, { Suspense, useEffect, useState } from 'react';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnMount: false,
      refetchOnWindowFocus: false,
      refetchOnReconnect: false,
      cacheTime: 1000 * 60 * 15,
      staleTime: 1000 * 60 * 15,
    }

  }
})

const dehydratedState = dehydrate(queryClient)


function MyApp({ Component, pageProps }: AppProps) {
  
  const [showChild, setShowChild] = useState(false);
  useEffect(() => {
    setShowChild(true);
  }, []);

  if (!showChild) {
    return null;
  }

  if (typeof window === 'undefined') {
    return <></>;
  } else {
    return (<>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        />
        <title>Home - CNSA Recruitment</title>
      </Head>
      <Suspense fallback={<div>Loading...</div>}>
        <QueryClientProvider client={queryClient}>
          <Hydrate state={dehydratedState}>
            <RecoilRoot>
              <Component {...pageProps} />
              <Toaster
                position="top-center"
                reverseOrder={false}
              />
              <Loader />
              <ReactQueryDevtools initialIsOpen={false} />
            </RecoilRoot>
          </Hydrate>
        </QueryClientProvider>
      </Suspense>

    </>
    );
  }
 
}

export default MyApp
