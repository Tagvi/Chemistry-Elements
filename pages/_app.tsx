import "@styles/globals.scss";
import type { AppProps } from "next/app";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta
          name="description"
          content="იხილე ნივთიერებები შენს ორგანიზმში და გამოთვალე რამდენს იღებ ყოველდღიურად."
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
