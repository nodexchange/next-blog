import React from 'react'
import App, { Container } from 'next/app'
import { ApolloProvider } from 'react-apollo'
import { Provider } from 'react-redux';
import withApolloClient from '../lib/with-apollo-client'

import { MuiThemeProvider } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import JssProvider from 'react-jss/lib/JssProvider'
import getPageContext from '../lib/getPageContext'

import { initStore } from '../redux/store'


class NextBlog extends App {
  constructor() {
    super();
    this.pageContext = getPageContext();
  }

  componentDidMount() {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles && jssStyles.parentNode) {
      jssStyles.parentNode.removeChild(jssStyles);
    }
  }
  // static async getInitialProps ({ Component, ctx }) {
  //   return {
  //     pageProps: Component.getInitialProps
  //       ? await Component.getInitialProps(ctx)
  //       : {}
  //   }
  // }

  render () {

    const store = initStore();

    const { Component, pageProps, apolloClient } = this.props
    return (
      <Container>
        <ApolloProvider client={apolloClient}>
          <Provider store={store}>
          <JssProvider
          registry={this.pageContext.sheetsRegistry}
          generateClassName={this.pageContext.generateClassName}
        >
          {/* MuiThemeProvider makes the theme available down the React
              tree thanks to React context. */}
            <MuiThemeProvider
              theme={this.pageContext.theme}
              sheetsManager={this.pageContext.sheetsManager}
            >
              {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
                <CssBaseline />
                <Component { ...pageProps } />
              </MuiThemeProvider>
            </JssProvider>
          </Provider>
        </ApolloProvider>
      </Container>
    )
  }
}

export default withApolloClient(NextBlog)