import '../styles/globals.css'
import type {AppProps} from 'next/app'
import {ChakraProvider, extendTheme} from "@chakra-ui/react";
import Footer from "../components/Footer";
import NavigationBar from "../components/NavigationBar";

const theme = extendTheme({
    config: {
        useSystemColorMode: true,
        initialColorMode: "dark"
    }
});


function App({Component, pageProps}: AppProps) {
    return (
        <>
            <ChakraProvider theme={theme}>
                <NavigationBar />
                <Component {...pageProps} />
                <Footer />
            </ChakraProvider>
        </>
    )
}

export default App
