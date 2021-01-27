import '../styles/globals.css'
import { Provider } from 'react-redux'
import { createWrapper } from 'next-redux-wrapper'
import STORE from '../store'

function MyApp({ Component, pageProps }) {

  return (
      <Provider store={STORE}>
        <Component {...pageProps} />
      </Provider>
  )
}

const reduxWrapper = createWrapper(() => STORE)

export default reduxWrapper.withRedux(MyApp);
