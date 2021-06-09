import Head from "next/head";
import Layout from "../components/layouts";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />

        <title>Plain - Multipurpose Bootstrap Template</title>

        <title>
          Arch - HTML Template for Construction and Architecture Sites
        </title>

        <meta name="description" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <link
          rel="shortcut icon"
          href="assets/images/favicon.png"
          type="image/png"
        />

        <link rel="stylesheet" href="assets/css/animate.css" />

        <link rel="stylesheet" href="assets/css/LineIcons.css" />

        <link rel="stylesheet" href="assets/css/bootstrap.min.css" />

        <link rel="stylesheet" href="assets/css/default.css" />

        <link rel="stylesheet" href="assets/css/style.css" />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
