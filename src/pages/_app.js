import React from 'react'
import App, { Container } from 'next/app'
import { ApolloProvider } from 'react-apollo'
import withApolloClient from '../lib/with-apollo-client'
import { Provider } from 'react-redux';

import { createStore, applyMiddleware } from 'redux';
import { initStore } from '../redux/store'


class NextBlog extends App {
  // static async getInitialProps ({ Component, ctx }) {
  //   return {
  //     pageProps: Component.getInitialProps
  //       ? await Component.getInitialProps(ctx)
  //       : {}
  //   }
  // }

  render () {

    const middleware = (store) => (next) => (action) => {
      console.log('>>> ACTION DISPATCH', action);
      next(action);
    }
    // console.log(initStore);
    const store = initStore();


    const { Component, pageProps, apolloClient } = this.props
    return (
      <Container>
        <ApolloProvider client={apolloClient}>
          <Provider store={store}>
              <Component {...pageProps} />
          </Provider>
        </ApolloProvider>
      </Container>
    )
  }
}

export default withApolloClient(NextBlog)