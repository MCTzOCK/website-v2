/**
 * @author Ben Siebert <ben@mctzock.de>
 * @copyright (c) 2018-2021 Ben Siebert. All rights reserved.
 */

import React from 'react';
import {Box, Heading, Link, Text} from "@chakra-ui/react";
import {NextSeo} from "next-seo";

export default function Imprint() {
    return (
        <>
            <NextSeo
                title="Imprint | Ben Siebert - Software Engineer & Student"
            />
            <Box minH={"100vh"} minW={"100%"}>
            <Box d={"flex"} justifyContent={"center"} alignItems={"center"} h={"100vh"}>
                <Box>
                    <Heading>Impressum</Heading>
                    <Text textAlign={'left'} fontSize={"1.6rem"}>
                        Angaben gem&auml;&szlig; &sect; 5 TMG
                    </Text>
                    <Box>

                    </Box>
                    <p>
                        Ben Siebert
                        <br/>
                        Im M&uuml;hlenwinkel 14
                        <br/>
                        45525 Hattingen
                    </p>
                    <h2>Kontakt</h2>
                    <p>
                        E-Mail: hello@ben-siebert.de
                    </p>
                    <h2>Redaktionell verantwortlich</h2>
                    <p>
                        Ben Siebert
                    </p>
                    <p>Quelle: <Link href="https://www.e-recht24.de" color={"blue.300"}>https://www.e-recht24.de</Link>
                    </p>
                </Box>
            </Box>
        </Box>
        </>

    )
}