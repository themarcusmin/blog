import "../styles/globals.css";

import Container from "../components/Container";
import Main from "../components/Main";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function MyApp({ Component, pageProps }) {
  return (
    <Container>
      <Navbar />
      <Main>
        <Component {...pageProps} />
      </Main>
      <Footer />
    </Container>
  );
}

export default MyApp;
