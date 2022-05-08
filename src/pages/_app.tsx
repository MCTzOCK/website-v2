import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { Box, ChakraProvider, extendTheme } from '@chakra-ui/react';
import Footer from '../components/Footer';
import NavigationBar from '../components/NavigationBar';
import { DefaultSeo } from 'next-seo';
import Script from 'next/script';

const theme = extendTheme({
  config: {
    useSystemColorMode: false,
    initialColorMode: 'dark',
  },
});

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <DefaultSeo
        description={
          'Ben Siebert is a software engineer and former student at the Gymnasium Holthausen in Hattingen, Germany. He is passionate about web development and is currently working on his own projects.'
        }
        openGraph={{
          type: 'website',
          locale: 'en_US',
          url: 'https://ben-siebert.de/',
          site_name: 'Ben Siebert - Software Engineer & Student',
          images: [
            {
              url: 'https://ben-siebert.de/assets/brand/cartoon.jpg',
              width: 512,
              height: 512,
              alt: 'Ben Siebert - Software Engineer & Student',
              type: 'image/jpg',
            },
          ],
        }}
        twitter={{
          handle: '@OfficialMCTzOCK',
          cardType: 'summary_large_image',
        }}
      />
      <Script
        id="nscr2pt"
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=G-6BH4TB6SWV`}
      />

      <Script strategy="lazyOnload" id="nscr1pt">
        {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-6BH4TB6SWV', {
        page_path: window.location.pathname,
        });
    `}
      </Script>
      <ChakraProvider theme={theme}>
        <NavigationBar />
        <Box minH="100vh" minW="100%">
          <Component {...pageProps} />
        </Box>
        <Footer />
      </ChakraProvider>
    </>
  );
}

export default App;
