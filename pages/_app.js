import "../styles/globals.css";
import { Layout } from "../components/layout";
import { Store } from "../components/store/store";

// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Store>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Store>
    </>
  );
}

export default MyApp;
