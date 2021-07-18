import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { AlurakutStyles } from '../src/lib/AluraKutCommons';
import { Helmet } from 'react-helmet';

const GlobalStyle = createGlobalStyle`
  *{
    margin:0;
    padding:0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Noto Sans', sans-serif;
    background-color: #D9E6F6;
    background-image: url('https://res.cloudinary.com/ddd13ev55/image/upload/v1626563798/alurakut/bkg2_cv63qh.jpg');
    background-position: center;
    background-size: cover;
  }

  small{
    font-size:0.9rem;    
    font-family: 'Pacifico', cursive;
  }

  #__next{
    display: flex;
    min-height: 100vh;
    flex-direction: column;
  }

  img{
    max-width: 100%;
    height: auto;
    display: block;
  }

  h1{
    line-height: 25px;
  }

  h1 small{
    font-style: italic;
  }

  ${AlurakutStyles}
`;

const theme = {
  colors: {
    primary: '#0070f3',
  },
};

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <Helmet>
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link rel='preconnect' href='https://fonts.gstatic.com' crossorigin />
        <link
          href='https://fonts.googleapis.com/css2?family=Noto+Sans&family=Pacifico&display=swap'
          rel='stylesheet'
        />
        <title>Alurakurt</title>
        <link rel='shortcut icon' href='/static/favicon.ico' />
      </Helmet>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
