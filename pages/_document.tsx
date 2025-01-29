import Document, { Head, Html, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="es">
        <Head>
          <link rel="icon" href="/favicon.ico" />
          <meta
            name="description"
            content="Lignus, artículos de madera"
          />
          <meta property="og:site_name" content="lignus.vercel.app" />
          <meta
            property="og:description"
            content="Lignus, artículos de madera"
          />
          <meta property="og:title" content="Lignus" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="Lignus" />
          <meta
            name="twitter:description"
            content="Lignus, artículos de madera"
          />
        </Head>
        <body className="bg-black antialiased">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
