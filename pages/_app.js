import Header from '../components/header'
import Footer from '../components/footer'
import { GlobalStyle } from "../styles/Global"

function MyApp({ Component, pageProps }) {
  return (
  <>
    <Header/>
    <Component {...pageProps} />
    <Footer/>
    <GlobalStyle/>
  </>)
}

export default MyApp
