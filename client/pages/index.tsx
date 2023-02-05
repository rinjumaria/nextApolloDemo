import { ApolloProvider } from '@apollo/client';
import React from 'react';
import App from './app';
import WithApollo from '../lib/with-apollo';

export default  function Home() {
  return(
    <React.StrictMode>
      <ApolloProvider client={WithApollo}>
      <App />
      </ApolloProvider>
    </React.StrictMode>
   )
}




