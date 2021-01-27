import '../styles/globals.css'
import { Provider } from 'react-redux'
import { useStore } from '../store'
import { ApolloProvider } from '@apollo/client'
import { useApollo } from '../apollo'

function MyApp({ Component, pageProps }) {

  const apolloClient = useApollo(pageProps.initialApolloState)
  const store = useStore(pageProps.initialReduxState)

  return (
      <Provider store={store}>
        <ApolloProvider client={apolloClient}>
          <Component {...pageProps} />
        </ApolloProvider>
      </Provider>
  )
}

export default MyApp
