/**
 * @author Ben Siebert <ben@mctzock.de>
 * @copyright (c) 2018-2021 Ben Siebert. All rights reserved.
 */

import { Head, Html, Main, NextScript } from 'next/document';

export default function Document() {
    return (
        <Html lang={"en"}>
            <Head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                {/* @ts-ignore */}
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin={"true"} />
                <link
                    href="https://fonts.googleapis.com/css2?family=Caveat&display=swap"
                    rel="stylesheet" />
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}