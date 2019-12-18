import Document, { Head, Main, NextScript } from 'next/document'

class CustomDocument extends Document {

  render() {

    return (
      <html>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          
          <link href="https://fonts.googleapis.com/css?family=Cinzel&display=swap" rel="stylesheet" />
          <link href="https://fonts.googleapis.com/css?family=Nanum+Gothic+Coding&display=swap" rel="stylesheet" />

        </Head>
        <body>
          <Main />
          <NextScript />

          <style global jsx>{`
          html {
            margin: 0;
            padding: 0;
          }
          body {
            margin: 0;
            padding: 0;
            overflow: hidden;
            font-family: 'Cinzel', serif;
            font-size: 1vw;
          }
        `}</style>
        </body>
      </html>
    )
  }
}

export default CustomDocument