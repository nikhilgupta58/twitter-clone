import Head from 'next/head'
import { useRouter } from 'next/router';
import React from 'react';

const Index = () => {
  const Router = useRouter()
  React.useEffect(() => {
    Router.push('/home')
  }, [])
  return (
    <>
      <Head>
        <title>Twitter</title>
        <link rel="icon" href="https://static01.nyt.com/images/2014/08/10/magazine/10wmt/10wmt-superJumbo-v4.jpg" />
      </Head>
    </>
  )
}

export default Index
