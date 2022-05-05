import '../styles/globals.css'
import type {AppProps} from 'next/app'
import {ChakraProvider, extendTheme} from "@chakra-ui/react";
import Footer from "../components/Footer";
import NavigationBar from "../components/NavigationBar";
import {DefaultSeo} from "next-seo";

const theme = extendTheme({
    config: {
        useSystemColorMode: false,
        initialColorMode: "dark"
    }
});


function App({Component, pageProps}: AppProps) {
    return (
        <>
            <DefaultSeo
                title={"Ben Siebert - Software Engineer & Student"}
                openGraph={{
                    type: 'website',
                    locale: 'en_US',
                    url: 'https://ben-siebert.de/',
                    site_name: 'Ben Siebert - Software Engineer & Student',
                }}
                twitter={{
                    handle: '@OfficialMCTzOCK',
                    cardType: 'summary_large_image',
                }}
            />
            <ChakraProvider theme={theme}>
                <NavigationBar />
                <Component {...pageProps} />
                <Footer />
            </ChakraProvider>
        </>
    )
}

export default App
