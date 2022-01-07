import "../styles/globals.css";

import Container from "../components/Container";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function MyApp({ Component, pageProps }) {
  return (
    <Container>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </Container>
  );
}

export default MyApp;
