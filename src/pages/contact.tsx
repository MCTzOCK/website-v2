/**
 * @author Ben Siebert <ben@mctzock.de>
 * @copyright (c) 2018-2021 Ben Siebert. All rights reserved.
 */

import {
    Alert,
    AlertDescription,
    AlertIcon, AlertTitle,
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
import {BsGithub, BsLinkedin, BsPerson, BsSnapchat, BsTwitter} from 'react-icons/bs';
import {MdEmail, MdOutlineEmail} from 'react-icons/md';
import {FaDiscord, FaInstagram} from "react-icons/fa";
import emailjs from '@emailjs/browser';

export default function ContactFormWithSocialButtons() {

    const [isError, setIsError] = React.useState(false);
    const [isSuccess, setIsSuccess] = React.useState(false);

    return (
        <>
            {
                isError ?
                    <Alert status="error">
                        <AlertIcon/>
                        <AlertTitle>Could not send mail!</AlertTitle>
                        <AlertDescription>
                            Your message could not be sent. Please try again later.
                        </AlertDescription>
                    </Alert>
                    : null
            }
            {
                isSuccess ?
                    <Alert status="success">
                        <AlertIcon/>
                        <AlertTitle>Message sent!</AlertTitle>
                        <AlertDescription>
                            Your message was sent successfully.
                        </AlertDescription>
                    </Alert>
                    : null
            }
            <Flex
                align="center"
                justify="center"
                id="contact">
                <Box
                    borderRadius="lg"
                    m={{base: 5, md: 16, lg: 10}}
                    p={{base: 5, lg: 16}}>
                    <Box>
                        <VStack spacing={{base: 4, md: 8, lg: 20}}>
                            <Heading
                                fontSize={{
                                    base: '4xl',
                                    md: '5xl',
                                }}>
                                Get in Touch
                            </Heading>

                            <Stack
                                spacing={{base: 4, md: 8, lg: 20}}
                                direction={{base: 'column', md: 'row'}}>
                                <Stack
                                    align="center"
                                    justify="space-around"
                                    direction={{base: 'row', md: 'column'}}>
                                    <Link href={"mailto:hello@ben-siebert.de"}>
                                        <IconButton
                                            aria-label="email"
                                            variant="ghost"
                                            size="lg"
                                            fontSize="3xl"
                                            icon={<MdEmail/>}
                                        />
                                    </Link>
                                    <Link href="https://github.com/MCTzOCK">
                                        <IconButton
                                            aria-label="github"
                                            variant="ghost"
                                            size="lg"
                                            fontSize="3xl"
                                            icon={<BsGithub/>}
                                        />
                                    </Link>

                                    <Link href="https://twitter.com/OfficialMCTzOCK">
                                        <IconButton
                                            aria-label="twitter"
                                            variant="ghost"
                                            size="lg"
                                            icon={<BsTwitter size="28px"/>}
                                        />
                                    </Link>
                                    <Link href="https://discord.com/invite/YEHzrWVTp6">
                                        <IconButton
                                            aria-label="discord"
                                            variant="ghost"
                                            size="lg"
                                            icon={<FaDiscord size="28px"/>}
                                        />
                                    </Link>
                                    <Link href="https://instagram.com/ben.sbrt">
                                        <IconButton
                                            aria-label="instagram"
                                            variant="ghost"
                                            size="lg"
                                            icon={<FaInstagram size="28px"/>}
                                        />
                                    </Link>

                                    <Link href="https://t.snapchat.com/8mP0mwG9">
                                        <IconButton
                                            aria-label="snapchat"
                                            variant="ghost"
                                            size="lg"
                                            icon={<BsSnapchat size="28px"/>}
                                        />
                                    </Link>
                                </Stack>

                                <Box
                                    bg={useColorModeValue('white', 'gray.700')}
                                    borderRadius="lg"
                                    p={8}
                                    color={useColorModeValue('gray.700', 'whiteAlpha.900')}
                                    shadow="base">
                                    <form onSubmit={(e) => {
                                        e.preventDefault();

                                        emailjs.init('bnHdgUREPUz_Ecns7')
                                        emailjs.send('auto.contact', "website_contact", {
                                            "from_name": (document.getElementsByName('name')[0] as HTMLInputElement).value,
                                            "reply_to": (document.getElementsByName('email')[0] as HTMLInputElement).value,
                                            "message": (document.getElementsByName('message')[0] as HTMLInputElement).value
                                        }).then((e) => {
                                            setIsSuccess(true);
                                            (document.getElementById("contact-form-submit") as HTMLButtonElement).disabled = true;
                                        }).catch((err) => {
                                            setIsError(true);
                                        })
                                    }}>
                                        <VStack spacing={5}>
                                            <FormControl isRequired>
                                                <FormLabel>Name</FormLabel>

                                                <InputGroup>
                                                    <InputLeftElement children={<BsPerson/>}/>
                                                    <Input type="text" name="name" placeholder="Your Name"/>
                                                </InputGroup>
                                            </FormControl>

                                            <FormControl isRequired>
                                                <FormLabel>Email</FormLabel>

                                                <InputGroup>
                                                    <InputLeftElement children={<MdOutlineEmail/>}/>
                                                    <Input
                                                        type="email"
                                                        name="email"
                                                        placeholder="Your Email"
                                                    />
                                                </InputGroup>
                                            </FormControl>

                                            <FormControl isRequired>
                                                <FormLabel>Message</FormLabel>

                                                <Textarea
                                                    name="message"
                                                    placeholder="Your Message"
                                                    rows={6}
                                                    resize="none"
                                                />
                                            </FormControl>

                                            <Button
                                                colorScheme="blue"
                                                id={"contact-form-submit"}
                                                type={"submit"}
                                                bg="blue.400"
                                                color="white"
                                                _hover={{
                                                    bg: 'blue.500',
                                                }}
                                                isFullWidth>
                                                Send Message
                                            </Button>
                                        </VStack>
                                    </form>

                                </Box>
                            </Stack>
                        </VStack>
                    </Box>
                </Box>
            </Flex>
        </>
    );
}
