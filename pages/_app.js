import '../styles/globals.css'
import { Provider } from 'react-redux'
import { createWrapper } from 'next-redux-wrapper'
import STORE from '../store'
import { ApolloProvider } from '@apollo/client'
import { useApollo } from '../apollo'

function MyApp({ Component, pageProps }) {

  const apolloClient = useApollo(pageProps.initialApolloState)

  return (
      <Provider store={STORE}>
        <ApolloProvider client={apolloClient}>
          <Component {...pageProps} />
        </ApolloProvider>
      </Provider>
  )
}

const reduxWrapper = createWrapper(() => STORE)

export default reduxWrapper.withRedux(MyApp);
