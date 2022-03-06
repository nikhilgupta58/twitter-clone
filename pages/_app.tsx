import React from 'react';
import { UserProvider } from '@auth0/nextjs-auth0';
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react';
import theme from '../Files/theme';
import { ApolloClient, ApolloProvider } from '@apollo/client';
import '../styles/globals.css'
import { cache } from '../Files/cache';

export default function MyApp({ Component, pageProps }) {
  const client = new ApolloClient({
    uri: `/api/graphql`,
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