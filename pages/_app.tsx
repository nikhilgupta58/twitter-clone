import React from 'react';
import { UserProvider } from '@auth0/nextjs-auth0';
import { ChakraProvider } from '@chakra-ui/react';
import theme from './theme';
import { ApolloClient, ApolloProvider } from '@apollo/client';
import { cache } from './cache';
import '../styles/globals.css'

export default function MyApp({ Component, pageProps }) {
  const client = new ApolloClient({
    uri: 'http://localhost:3000/api/graphql',
    cache: cache
  });
  return (
    <UserProvider>
      <ChakraProvider theme={theme} resetCSS>
        <ApolloProvider client={client}>
          <Component {...pageProps} />
        </ApolloProvider>
      </ChakraProvider>
    </UserProvider>
  );
}