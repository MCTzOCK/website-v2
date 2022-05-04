/**
 * @author Ben Siebert <ben@mctzock.de>
 * @copyright (c) 2018-2021 Ben Siebert. All rights reserved.
 */

import React from "react";
import {
    Box,
    Button,
    chakra,
    CloseButton,
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
    Stack,
    useColorMode,
    useColorModeValue,
    useDisclosure,
    VStack,
} from "@chakra-ui/react";
import {useViewportScroll} from "framer-motion";

import {IoIosArrowDown} from "react-icons/io";
import {AiFillHome, AiOutlineMenu} from "react-icons/ai";
import {FaMoon, FaSun} from "react-icons/fa";

export default function NavigationBar() {
    const {toggleColorMode: toggleMode} = useColorMode();
    const text = useColorModeValue("dark", "light");
    const SwitchIcon = useColorModeValue(FaMoon, FaSun);
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
            <Link
                m={-3}
                p={3}
                display="flex"
                alignItems="start"
                rounded="lg"
                href={props.href}
                _hover={{bg: hbg}}
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
                    <path d={props.icon}/>
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
        );
    };

    const sections = [
        {
            title: "Analytics",
            icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z",
            description:
                "Get a better understanding of where your traffic is coming from.",
            href: "/test"
        }
    ];

    const Features = (props: any) => {
        const hbg = useColorModeValue("gray.50", "brand.400");
        const hbgh = useColorModeValue("gray.100", "brand.500");
        const tcl = useColorModeValue("gray.900", "gray.50");
        return (
            <React.Fragment>
                <SimpleGrid
                    columns={props.h ? {base: 1, md: 3, lg: 5} : 1}
                    pos="relative"
                    gap={{base: 6, sm: 8}}
                    px={5}
                    py={6}
                    p={{sm: 8}}
                >
                    {sections.map(({title, icon, description, href}, sid) => (
                        <Section title={title} icon={icon} key={sid} href={href}>
                            {description}
                        </Section>
                    ))}
                </SimpleGrid>
                <Box px={{base: 5, sm: 8}} py={5} bg={hbg} display={{sm: "flex"}}>
                    <Stack direction={{base: "row"}} spacing={{base: 6, sm: 10}}>
                        <Box display="flow-root">
                            <Link
                                m={-3}
                                p={3}
                                display="flex"
                                alignItems="center"
                                rounded="md"
                                fontSize="md"
                                color={tcl}
                                _hover={{bg: hbgh}}
                            >
                                <Icon
                                    flexShrink={0}
                                    h={6}
                                    w={6}
                                    color="gray.400"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    aria-hidden="true"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                >
                                    <path
                                        d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"/>
                                    <path d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                                </Icon>
                                <chakra.span ml={3}>All</chakra.span>
                            </Link>
                        </Box>
                    </Stack>
                </Box>
            </React.Fragment>
        );
    };

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
            m={2}
            bg={bg}
            spacing={3}
            rounded="sm"
            shadow="sm"
        >
            <CloseButton
                aria-label="Close menu"
                justifySelf="self-start"
                onClick={mobileNav.onClose}
            />
            <Button w="full" variant="ghost" leftIcon={<AiFillHome/>}>
                Dashboard
            </Button>
            <Features/>
        </VStack>
    );

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
                        <Link href="/">
                            <HStack>
                                <Heading>Ben Siebert</Heading>
                            </HStack>
                        </Link>
                    </Flex>
                    <Flex>
                        <HStack spacing="5" display={{base: "none", md: "flex"}}>
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
                                        Work
                                    </Button>
                                </PopoverTrigger>
                                <PopoverContent
                                    w="100vw"
                                    maxW="md"
                                    _focus={{boxShadow: "md"}}
                                >
                                    <Features/>
                                </PopoverContent>
                            </Popover>
                            <Button
                                bg={bg}
                                color="gray.500"
                                display="inline-flex"
                                alignItems="center"
                                fontSize="md"
                                _hover={{color: cl}}
                                _focus={{boxShadow: "none"}}
                                as={"a"}
                                href="/about"
                            >
                                About
                            </Button>
                            <Button
                                bg={bg}
                                color="gray.500"
                                display="inline-flex"
                                alignItems="center"
                                fontSize="md"
                                _hover={{color: cl}}
                                _focus={{boxShadow: "none"}}
                            >
                                Pricing
                            </Button>
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
