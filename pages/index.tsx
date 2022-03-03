import Head from 'next/head'
import Link from 'next/link'
import { useUser } from '@auth0/nextjs-auth0';
import React from 'react';

const Index = () => {
  const { user, error, isLoading } = useUser();
  React.useEffect(() => {
    console.log(user)
  }, [])
  if (isLoading)
    return <>Loading...</>
  if (error)
    return <>{error}</>
  if (user) {
    return (
      <>
        <Head>
          <title>Twitter</title>
          <link rel="icon" href="https://static01.nyt.com/images/2014/08/10/magazine/10wmt/10wmt-superJumbo-v4.jpg" />
        </Head>
        <Link href={'/api/auth/logout'}>Logout</Link>
      </>
    )
  }
  return (
    <>
      <Head>
        <title>Twitter</title>
        <link rel="icon" href="https://static01.nyt.com/images/2014/08/10/magazine/10wmt/10wmt-superJumbo-v4.jpg" />
      </Head>
      <Link href={'/api/auth/login'}>Login</Link>
    </>
  )
}

export default Index
