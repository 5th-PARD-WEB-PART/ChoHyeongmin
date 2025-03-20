import "../styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "../components/Layout"; // Layout 불러오기

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
