import Head from 'next/head'
import Link from 'next/link'
import { useUser } from '@auth0/nextjs-auth0';
import React from 'react';
import { Box } from '@chakra-ui/react';

const Index = () => {
  const { user, error, isLoading } = useUser();
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
        <Box>
          sdfg
        </Box>
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
