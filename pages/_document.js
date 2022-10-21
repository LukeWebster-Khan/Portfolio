import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter&display=optional"
          rel="stylesheet"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Anek+Malayalam:wght@300&family=Fira+Sans:wght@300&family=Inter:wght@300;400;600;700&family=Lato:ital,wght@0,300;0,400;1,300;1,400&family=Open+Sans:wght@300;400;500;600;700;800&family=Roboto:wght@300&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
