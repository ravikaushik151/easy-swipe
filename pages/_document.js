import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html>
      <Head>        
        {/* Link to the favicon */}
        <link rel="icon" href="/favicon.ico" />
        {/* Add any other head elements here */}
      </Head>
      <body>
        <Main />
        <NextScript />
        <script src='https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js'></script>
      </body>
    </Html>
  );
}
