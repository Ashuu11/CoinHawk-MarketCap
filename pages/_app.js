import '../styles/globals.css'
import { MoralisProvider } from 'react-moralis'
import { CoinHawkProvider } from '../context/context'

function MyApp({ Component, pageProps }) {
  return (
  <MoralisProvider serverUrl='https://zci3phowgocu.usemoralis.com:2053/server' appId='ny6mOqAHDpLhOT2c0dGF5KCt1qZovz50zTzhaX4n'>
      <CoinHawkProvider>
        <Component {...pageProps} />
      </CoinHawkProvider>
  </MoralisProvider>
  )
}

export default MyApp
