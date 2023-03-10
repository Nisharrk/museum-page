import { SWRConfig } from "swr";
import Layout from "@/components/Layout";
import "bootstrap/dist/css/bootstrap.min.css";

function App({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default App;
