/**
 * @author Ben Siebert <ben@mctzock.de>
 * @copyright (c) 2018-2021 Ben Siebert. All rights reserved.
 */

import React from "react";
import {
    chakra,
    Box,
    SimpleGrid,
    Flex,
    useColorModeValue,
    Icon,
} from "@chakra-ui/react";
import {
    FaAtom,
    FaBootstrap,
    FaDatabase, FaDocker,
    FaGitAlt,
    FaGithub,
    FaHtml5,
    FaJava,
    FaJs,
    FaNodeJs,
    FaReact,
    FaSass
} from "react-icons/fa";
export default function Fgl() {
    const Skill = (props: any) => {
        return (
            <Box>
                <Flex
                    alignItems="center"
                    justifyContent="center"
                    w={8}
                    h={8}
                    mb={4}
                    rounded="full"
                    color={useColorModeValue(`${props.color}.600`, `${props.color}.100`)}
                    bg={useColorModeValue(`${props.color}.100`, `${props.color}.600`)}
                >
                    <Icon
                        boxSize={5}
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                    >
                        {props.icon}
                    </Icon>
                </Flex>
                <chakra.h3
                    mb={2}
                    fontWeight="semibold"
                    lineHeight="shorter"
                    color={useColorModeValue("gray.900", "gray.500")}
                >
                    {props.title}
                </chakra.h3>
                <chakra.p
                    fontSize="sm"
                    color={useColorModeValue("gray.500", "gray.400")}
                >
                    {props.children}
                </chakra.p>
            </Box>
        );
    };
    return (
        <Flex
            p={20}
            w="auto"
            justifyContent="center"
            alignItems="center"
            minW={"100%"}
            minH={"100vh"}
        >
            <Box
                px={8}
                py={20}
                mx="auto"
                bg={useColorModeValue("white", "gray.900")}
                shadow="xl"
            >
                <Box textAlign={{ lg: "center" }}>
                    <chakra.p
                        mt={2}
                        fontSize={{ base: "3xl", sm: "4xl" }}
                        lineHeight="8"
                        fontWeight="extrabold"
                        letterSpacing="tight"
                        color={useColorModeValue("gray.900", "gray.500")}
                    >
                        Skills
                    </chakra.p>
                    <chakra.p
                        mt={4}
                        maxW="2xl"
                        fontSize="xl"
                        mx={{ lg: "auto" }}
                        color={useColorModeValue("gray.500", "gray.400")}
                    >
                        Here are some of the skills I have acquired over the years.
                    </chakra.p>
                </Box>
                <SimpleGrid
                    columns={{ base: 1, sm: 2, md: 3, lg: 4 }}
                    spacingX={{ base: 16, lg: 24 }}
                    spacingY={20}
                    mt={6}
                >
                    <Skill
                        color="yellow"
                        title="JavaScript"
                        icon={
                            <>
                                <FaJs />
                            </>
                        }
                    >
                        JavaScript is one of my favorite languages. I most love it because it can be used to create full stack applications.
                    </Skill>
                    <Skill
                        color={"blue"}
                        title="TypeScript"
                        icon={
                            <>
                                <FaJs />
                            </>
                        }
                    >
                        TypeScript is my favorite language. I use it to create components and interfaces for my applications.
                    </Skill>
                    <Skill
                        color={"blue"}
                        title="React"
                        icon={
                            <>
                                <FaReact />
                            </>
                        }
                    >
                        I use react to manage the frontend of my applications.
                    </Skill>
                    <Skill
                        color={"green"}
                        title={"Node.js"}
                        icon={
                            <>
                                <FaNodeJs />
                            </>
                        }>
                        I use node.js to create backend applications.
                    </Skill>
                    <Skill
                        color={"green"}
                        title={"Express.js"}
                        icon={
                            <>
                                <FaNodeJs />
                            </>
                        }>
                        I love express because it makes it easy to create well working REST APIs.
                    </Skill>
                    <Skill
                        color={"orange"}
                        title={"HTML"}
                        icon={
                            <>
                                <FaHtml5 />
                            </>
                        }>
                        HTML is the markup language I first learned to create webpages.
                    </Skill>
                    <Skill
                        color={"pink"}
                        title={"SCSS"}
                        icon={
                            <>
                                <FaSass />
                            </>
                        }>
                        SCSS is my favorite CSS preprocessor because it makes designing my applications easier.
                    </Skill>
                    <Skill
                        color={"red"}
                        title={"Java"}
                        icon={
                            <>
                                <FaJava />
                            </>
                        }
                    >
                        Java is the language I first learned to create applications. I used it a lot in the past.
                    </Skill>
                    <Skill
                        color={"cyan"}
                        title={"Chakra UI"}
                        icon={
                            <>
                                <FaReact />
                            </>
                        }>
                        Chakra UI is a library I use to create components for my applications.
                    </Skill>
                    <Skill
                        color={"green"}
                        title={"MongoDB"}
                        icon={
                            <>
                                <FaDatabase />
                            </>
                        }>
                        MongoDB is my favorite document oriented database.
                    </Skill>
                    <Skill
                        color={"orange"}
                        title={"MySQL"}
                        icon={
                            <>
                                <FaDatabase />
                            </>
                        }
                    >
                        MySQL is the first database I&#39;ve learned but I don&#39;t use it anymore.
                    </Skill>
                    <Skill
                        color={"orange"}
                        title={"Git"}
                        icon={
                            <>
                                <FaGitAlt />
                            </>
                        }>
                        Git is the only version control system I use.
                    </Skill>
                    <Skill
                        color={"orange"}
                        title={"GitHub"}
                        icon={
                            <>
                                <FaGithub />
                            </>
                        }>
                        GitHub is the place where I host my repositories.
                    </Skill>
                    <Skill
                        color={"purple"}
                        title={"Bootstrap"}
                        icon={
                            <>
                                <FaBootstrap />
                            </>
                        }>
                        Bootstrap is a library I&#39;ve used in the past to create responsive web applications. Today I only use Chakra UI and self-made components.
                    </Skill>
                    <Skill
                        color={"blue"}
                        title={"Electron"}
                        icon={
                            <>
                                <FaAtom />
                            </>
                        }>
                        Electron is a library I use to wrap my applications in a native desktop application.
                    </Skill>
                    <Skill
                        color={"cyan"}
                        title={"Docker"}
                        icon={
                            <>
                                <FaDocker />
                            </>
                        }>
                        Docker is a tool I use to deploy my applications.
                    </Skill>
                </SimpleGrid>
            </Box>
        </Flex>
    );
}
