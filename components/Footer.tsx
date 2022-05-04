/**
 * @author Ben Siebert <ben@mctzock.de>
 * @copyright (c) 2018-2021 Ben Siebert. All rights reserved.
 */

import {Box, Container, Heading, SimpleGrid, Stack, Text, useColorModeValue} from '@chakra-ui/react'
import * as React from 'react'
import {FaHeart} from 'react-icons/fa'
import SocialIcons from "./SocialIcons";
import UkraineFlag from "./UkraineFlag";

export default function Footer() {
    return (
        <Container as="footer" role="contentinfo" py={{base: '12', md: '16'}} maxWidth={"100%"} marginInline={"none"}
                   paddingInline={"4rem"} backgroundColor={useColorModeValue("gray.300", "gray.900")}>
            <Stack spacing={{base: '4', md: '5'}}>
                <Stack justify="space-between" direction="row" align="center">
                    <Heading>Ben Siebert</Heading>
                    <SocialIcons/>
                </Stack>
                <Text fontSize="sm" color="subtle">
                    &copy; {new Date().getFullYear()} Ben Siebert. All rights reserved.
                    <Box d={"flex"} flexDir={"column"} gap={"1.2rem"} mt={"1rem"}>
                        <Text d={"flex"} gap={"0.3rem"} justifyContent={"center"} alignItems={"center"}>Made with <FaHeart
                            color={"red"}/> by me.
                        </Text>
                        <Text d={"flex"} gap={"0.3rem"} justifyContent={"center"} alignItems={"center"}>
                            <UkraineFlag width={18} /> #PrayForUkraine
                        </Text>
                    </Box>

                </Text>
            </Stack>
        </Container>
    )
}

function getColorModeValue(arg0: string) {
    throw new Error('Function not implemented.')
}
