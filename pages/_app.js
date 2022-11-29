import Header from "../components/header";
import Footer from "../components/footer";
import { GlobalStyle } from "../styles/Global";
import { Toaster } from "react-hot-toast";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Header />
      <Toaster position="top-center" reverseOrder={false} />
      <Component {...pageProps} />
      <Footer />
      <GlobalStyle />
    </>
  );
}

export default MyApp;
