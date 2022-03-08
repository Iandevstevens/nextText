import Document, { Html, Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  render(): JSX.Element {
    return (
      <Html>
        <Head>
          <meta property="og:title" content="Sebenza" key="title" />
          <meta charSet="utf-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta name="viewport" content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no" />
          <title>Sebenza</title>
          <link rel="manifest" href="/manifest.json" />
          <link rel="apple-touch-icon" href="/icons/Sebenza_Notifications_Icon_192x192.png"></link>
          <meta name="theme-color" content="#f8ce02" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
