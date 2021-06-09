import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head />
        <body>
          <Main />
          <NextScript />
          <script src="assets/js/vendor/jquery-1.12.4.min.js"></script>
          <script src="assets/js/vendor/modernizr-3.7.1.min.js"></script>

          <script src="assets/js/popper.min.js"></script>
          <script src="assets/js/bootstrap.min.js"></script>

          <script src="assets/js/jquery.easing.min.js"></script>
          <script src="assets/js/scrolling-nav.js"></script>

          <script src="assets/js/wow.min.js"></script>

          <script src="assets/js/main.js"></script>
        </body>
      </Html>
    );
  }
}

export default MyDocument;
