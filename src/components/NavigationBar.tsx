/**
 * @author Ben Siebert <ben@mctzock.de>
 * @copyright (c) 2018-2021 Ben Siebert. All rights reserved.
 */

import React, {useEffect} from "react";
import {
    Box,
    Button,
    chakra,
    CloseButton, Divider,
    Flex,
    Heading,
    HStack,
    Icon,
    IconButton,
    Link,
    Popover,
    PopoverContent,
    PopoverTrigger,
    SimpleGrid,
    useColorMode,
    useColorModeValue,
    useDisclosure,
    VStack,
} from "@chakra-ui/react";
import {useViewportScroll} from "framer-motion";

import {IoIosArrowDown} from "react-icons/io";
import {AiOutlineMenu} from "react-icons/ai";
import {FaAddressCard, FaBook, FaList, FaTools, FaUserCircle} from "react-icons/fa";
import NextLink from "next/link";

export default function NavigationBar() {
    const {toggleColorMode: toggleMode} = useColorMode();
    const bg = useColorModeValue("white", "gray.800");
    const ref = React.useRef();
    const [y, setY] = React.useState(0);
    // @ts-ignore
    const {height = 0} = ref.current ? ref.current.getBoundingClientRect() : {};

    const {scrollY} = useViewportScroll();
    React.useEffect(() => {
        return scrollY.onChange(() => setY(scrollY.get()));
    }, [scrollY]);
    const cl = useColorModeValue("gray.800", "white");
    const mobileNav = useDisclosure();

    const Section = (props: any) => {
        const ic = useColorModeValue("brand.600", "brand.50");
        const hbg = useColorModeValue("gray.50", "brand.400");
        const tcl = useColorModeValue("gray.900", "gray.50");
        const dcl = useColorModeValue("gray.500", "gray.50");
        return (
            <NextLink href={props.href}>
                <Link
                    m={-3}
                    p={3}
                    display="flex"
                    alignItems="start"
                    rounded="lg"
                    _hover={{bg: hbg}}
                    href={props.href}
                >
                    <Icon
                        flexShrink={0}
                        h={6}
                        w={6}
                        color={ic}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        aria-hidden="true"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                    >
                        {props.icon}
                    </Icon>
                    <Box ml={4}>
                        <chakra.p fontSize="sm" fontWeight="700" color={tcl}>
                            {props.title}
                        </chakra.p>
                        <chakra.p mt={1} fontSize="sm" color={dcl}>
                            {props.children}
                        </chakra.p>
                    </Box>
                </Link>
            </NextLink>
        );
    };

    function closeMobileNav() {
        mobileNav.onClose();
    }


    useEffect(() => {
        if(document.getElementById("mobile-nav") !== null) {
            let body = document.body,
                html = document.documentElement;
            (document.getElementById("mobile-nav") as HTMLElement).style.height = Math.max( body.scrollHeight, body.offsetHeight,
                html.clientHeight, html.scrollHeight, html.offsetHeight ) + "px";
        }
    }, [])

    const MobileNavContent = (
        <VStack
            pos="absolute"
            top={0}
            left={0}
            right={0}
            display={mobileNav.isOpen ? "flex" : "none"}
            flexDirection="column"
            zIndex={4}
            p={2}
            pb={4}
            bg={bg}
            spacing={3}
            rounded="sm"
            shadow="sm"
            minH={"100vh"}
            minW={"100vw"}
            id={"mobile-nav"}
            onClick={() => {
                closeMobileNav()
            }}
        >
            <CloseButton
                aria-label="Close menu"
                justifySelf="self-start"
                onClick={closeMobileNav}
            />
            <Content>
                <Section title="Ben Siebert" icon={<FaUserCircle/>} href="/"/>
                <Section title={"Blog"} icon={<FaBook/>} href="/blog"/>
                <Divider/>
                <AboutSections/>
                <Divider/>
                <WorkSections/>
                <Divider/>
                <LegalSections/>
            </Content>
        </VStack>
    );

    function AboutSections() {
        return (
            <>
                <Section title={"About"}
                         icon={<FaAddressCard/>}
                         href={"/about"}>
                    About my person and my history.
                </Section>
                <Section title={"Skills"}
                         icon={<FaTools/>}
                         href={"/skills"}>
                    My skills and technologies.
                </Section>
            </>
        )
    }

    function WorkSections() {
        return (
            <>
                <Section title={"InCode"} icon={""} href={"/projects/incode"}>
                    Jugend Forscht 2022
                </Section>
                <Section title={"SenOS"} icon={""} href={"/projects/senos"}>
                    Jugend Forscht 2021
                </Section>
                <Section title={"Decryptor"} icon={""} href={"/projects/decryptor"}>
                    Jugend Forscht 2020
                </Section>
                <Section title={"All Projects"} icon={<FaList/>} href={"/projects/all"}/>
            </>
        )
    }

    function LegalSections() {
        return (
            <>
                <Section title={"Imprint"} icon={<FaBook/>} href={"/legal/imprint"}/>
                <Section title={"Privacy Policy"} icon={<FaBook/>} href={"/legal/privacy"}/>
            </>
        )
    }

    function Content(props: any) {
        return (<React.Fragment>
            <SimpleGrid
                columns={1}
                pos="relative"
                gap={{base: 6, sm: 8}}
                px={5}
                py={6}
                p={{sm: 8}}
            >
                {props.children}
            </SimpleGrid>
        </React.Fragment>)
    }

    function PopoverX(props: any) {
        return (
            <Popover>
                {/* @ts-ignore */}
                <PopoverTrigger>
                    <Button
                        bg={bg}
                        color="gray.500"
                        display="inline-flex"
                        alignItems="center"
                        fontSize="md"
                        _hover={{color: cl}}
                        _focus={{boxShadow: "none"}}
                        rightIcon={<IoIosArrowDown/>}
                    >
                        {props.title}
                    </Button>
                </PopoverTrigger>
                <PopoverContent
                    w="100vw"
                    maxW="md"
                    _focus={{boxShadow: "md"}}
                >
                    <Content>
                        {props.children}
                    </Content>
                </PopoverContent>
            </Popover>
        )
    }

    return (
        <chakra.header
            // @ts-ignore
            ref={ref}
            shadow={y > height ? "sm" : undefined}
            transition="box-shadow 0.2s"
            bg={bg}
            w="full"
            overflowY="hidden"
            borderBottomWidth={2}
            borderBottomColor={useColorModeValue("gray.200", "gray.900")}
            zIndex={1024}
        >
            <chakra.div h="4.5rem" mx="auto" maxW="1200px">
                <Flex
                    w="full"
                    h="full"
                    px="6"
                    alignItems="center"
                    justifyContent="space-between"
                >
                    <Flex align="flex-start">
                        <NextLink href={"/"}>
                            <Link href={"/"}>
                                <HStack>
                                    <Heading>Ben Siebert</Heading>
                                </HStack>
                            </Link>
                        </NextLink>
                    </Flex>
                    <Flex>
                        <HStack spacing="5" display={{base: "none", md: "flex"}}>
                            <PopoverX title={"Me"}>
                                <AboutSections/>
                            </PopoverX>
                            <NextLink href={"/blog"}>
                                <Button
                                    bg={bg}
                                    color="gray.500"
                                    display="inline-flex"
                                    alignItems="center"
                                    fontSize="md"
                                    _hover={{color: cl}}
                                    _focus={{boxShadow: "none"}}
                                    as={"a"}
                                    href={"/blog"}
                                >
                                    Blog
                                </Button>
                            </NextLink>
                            <PopoverX title={"Work"}>
                                <WorkSections/>
                            </PopoverX>
                            <PopoverX title={"Legal"}>
                                <LegalSections/>
                            </PopoverX>
                        </HStack>
                    </Flex>
                    <Flex justify="flex-end" align="center" color="gray.400">
                        <IconButton
                            display={{base: "flex", md: "none"}}
                            aria-label="Open menu"
                            fontSize="20px"
                            color={useColorModeValue("gray.800", "inherit")}
                            variant="ghost"
                            icon={<AiOutlineMenu/>}
                            onClick={mobileNav.onOpen}
                        />
                    </Flex>
                </Flex>
                {MobileNavContent}
            </chakra.div>
        </chakra.header>
    );
}
