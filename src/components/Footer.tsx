/**
 * @author Ben Siebert <ben@mctzock.de>
 * @copyright (c) 2018-2021 Ben Siebert. All rights reserved.
 */
import {
    Box,
    Button,
    ButtonGroup,
    Container,
    Divider, Heading,
    IconButton,
    Input,
    Stack,
    Text,
} from '@chakra-ui/react'
import * as React from 'react'
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'
import NextLink from "next/link";
import UkraineFlag from "./UkraineFlag";
import SocialIcons from "./SocialIcons";

export default function Footer() {
    return (
        <Box as="footer" role="contentinfo" w={"full"} bg={"gray.900"} p={"2rem"}>
            <Stack
                spacing="8"
                direction={{ base: 'column', md: 'row' }}
                justify="space-between"
                py={{ base: '12', md: '16' }}
                w={"full"}
            >
                <Stack spacing={{ base: '6', md: '8' }} align="start">
                    <Heading>Ben Siebert</Heading>
                    <Text color="muted">
                        <Text as="span" align={'left'}><Text d={"flex"} gap={".3rem"} as={"span"}><UkraineFlag width={18} /> #PrayForUkraine</Text></Text>
                    </Text>
                </Stack>
                <Stack
                    direction={{ base: 'column-reverse', md: 'column', lg: 'row' }}
                    spacing={{ base: '12', md: '8' }}
                >
                    <Stack direction="row" spacing="8">
                        <Stack spacing="4" minW="36" flex="1">
                            <Text fontSize="sm" fontWeight="semibold" color="subtle">
                                Website
                            </Text>
                            <Stack spacing="3" shouldWrapChildren>
                                <NextLink href={"/"}>
                                    <Button variant="link" as={"a"} href={"/"}>Home</Button>
                                </NextLink>
                                <NextLink href={"/about"}>
                                    <Button variant="link" as={"a"} href={"/about"}>About</Button>
                                </NextLink>
                                <NextLink href={"/projects/all"}>
                                    <Button variant="link" as={"a"} href={"/projects/all"}>Projects</Button>
                                </NextLink>
                            </Stack>
                        </Stack>
                        <Stack spacing="4" minW="36" flex="1">
                            <Text fontSize="sm" fontWeight="semibold" color="subtle">
                                Legal
                            </Text>
                            <Stack spacing="3" shouldWrapChildren>
                                <NextLink href={"/legal/imprint"}>
                                    <Button variant="link" as={"a"} href={"/legal/imprint"}>Imprint</Button>
                                </NextLink>
                                <NextLink href={"/legal/privacy"}>
                                    <Button variant="link" as={"a"} href={"/legal/privacy"}>Privacy</Button>
                                </NextLink>
                            </Stack>
                        </Stack>
                    </Stack>
                </Stack>
            </Stack>
            <Divider />
            <Stack
                pt="8"
                pb="12"
                justify="space-between"
                direction={{ base: 'column-reverse', md: 'row' }}
                align="center"
            >
                <Text fontSize="sm" color="subtle">
                    &copy; {new Date().getFullYear()} Ben Siebert. All rights reserved.
                </Text>
                <ButtonGroup variant="ghost">
                    <SocialIcons />
                </ButtonGroup>
            </Stack>
        </Box>
    );
}