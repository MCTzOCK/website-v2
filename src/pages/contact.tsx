/**
 * @author Ben Siebert <ben@mctzock.de>
 * @copyright (c) 2018-2021 Ben Siebert. All rights reserved.
 */

import {
    Box,
    Button,
    Flex,
    FormControl,
    FormLabel,
    Heading,
    IconButton,
    Input,
    InputGroup,
    InputLeftElement,
    Link,
    Stack,
    Textarea,
    Tooltip,
    useClipboard,
    useColorModeValue,
    VStack,
} from '@chakra-ui/react';
import React from 'react';
import {BsDiscord, BsGithub, BsLinkedin, BsPerson, BsSnapchat, BsTwitter} from 'react-icons/bs';
import { MdEmail, MdOutlineEmail } from 'react-icons/md';
import {FaDiscord, FaInstagram, FaSnapchat} from "react-icons/fa";
import {NextSeo} from "next-seo";

const confetti = {
    light: {
        primary: '4299E1', // blue.400
        secondary: 'BEE3F8', // blue.100
    },

    dark: {
        primary: '1A365D', // blue.900
        secondary: '2A4365', // blue.800
    },
};

export default function Contact() {

    return (
        <>
            <NextSeo
                title="Contact | Ben Siebert - Software Engineer & Student"
            />
            <Flex
                align="center"
                justify="center"
                minH={"100vh"}
                minW={"100%"}
            >
                <Box
                    borderRadius="lg"
                    m={{ base: 5, md: 16, lg: 10 }}
                    p={{ base: 5, lg: 16 }}>
                    <Box>
                        <VStack spacing={{ base: 4, md: 8, lg: 20 }}>
                            <Heading
                                fontSize={{
                                    base: '4xl',
                                    md: '5xl',
                                }}>
                                Get in Touch
                            </Heading>

                            <Stack
                                spacing={{ base: 4, md: 8, lg: 20 }}
                                direction={"row"}>
                                <Stack
                                    align="center"
                                    justify="space-around"
                                    direction={"row"}>
                                    <Link href={"mailto:hello@ben-siebert.de"}>
                                        <IconButton
                                            aria-label="email"
                                            variant="ghost"
                                            size="lg"
                                            fontSize="3xl"
                                            icon={<MdEmail />}
                                        />
                                    </Link>
                                    <Link href="https://github.com/MCTzOCK">
                                        <IconButton
                                            aria-label="github"
                                            variant="ghost"
                                            size="lg"
                                            fontSize="3xl"
                                            icon={<BsGithub />}
                                        />
                                    </Link>

                                    <Link href="https://twitter.com/OfficialMCTzOCK">
                                        <IconButton
                                            aria-label="twitter"
                                            variant="ghost"
                                            size="lg"
                                            icon={<BsTwitter size="28px" />}
                                        />
                                    </Link>
                                    <Link href="https://discord.com/invite/YEHzrWVTp6">
                                        <IconButton
                                            aria-label="discord"
                                            variant="ghost"
                                            size="lg"
                                            icon={<FaDiscord size="28px" />}
                                        />
                                    </Link>
                                    <Link href="https://instagram.com/ben.sbrt">
                                        <IconButton
                                            aria-label="instagram"
                                            variant="ghost"
                                            size="lg"
                                            icon={<FaInstagram size="28px" />}
                                        />
                                    </Link>

                                    <Link href="https://t.snapchat.com/8mP0mwG9">
                                        <IconButton
                                            aria-label="snapchat"
                                            variant="ghost"
                                            size="lg"
                                            icon={<BsSnapchat size="28px" />}
                                        />
                                    </Link>
                                </Stack>
                            </Stack>
                        </VStack>
                    </Box>
                </Box>
            </Flex>
        </>
    );
}
