/**
 * @author Ben Siebert <ben@mctzock.de>
 * @copyright (c) 2018-2021 Ben Siebert. All rights reserved.
 */
import React, {useEffect, useState} from "react";
import {
    Button,
    Center,
    Flex,
    Heading,
    Icon,
    SimpleGrid,
    Stack,
    Text,
    Tooltip,
    useColorModeValue
} from "@chakra-ui/react";
import NextLink from "next/link";
import {FaBook, FaStar} from "react-icons/fa";
import {VscRepoForked} from "react-icons/vsc";
import {NextSeo} from "next-seo";

export default function All() {

    const [projects, setProjects] = useState([]);

    useEffect(() => {
        fetch("https://api.github.com/users/MCTzOCK/repos?per_page=100")
            .then(res => res.json())
            .then(data => {
                data.sort((a: any, b: any) => {
                    return new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime();
                });
                setProjects(data);
            });
    }, [])


    return (
        <div>
            <NextSeo
                title="All Projects | Ben Siebert - Software Engineer & Student"
            />
            <Flex direction={"column"} gap={"2rem"} mt={"2rem"}>
                <Heading textAlign={"center"} size={"lg"}>Promoted</Heading>
                <SimpleGrid gap={"2rem"} minChildWidth={"400px"}>
                    <RepoCard name={"InCode"}
                              description={"Create awesome Web Applications in your native language with InCode"}
                              stars={0}
                              forks={0} license={"GPL-3.0"} url={"/projects/incode"}/>
                    <RepoCard name={"SenOS"}
                              description={"Make the PC yours again with SenOS"}
                              stars={0}
                              forks={0} license={"GPL-3.0"} url={"/projects/senos"}/>
                    <RepoCard name={"Decryptor"}
                              description={"Encrypt and Decrypt any text with the Decryptor"}
                              stars={0}
                              forks={0} license={"MIT"} url={"/projects/decryptor"}/>
                </SimpleGrid>
            </Flex>
            <Flex direction={"column"} gap={"2rem"} mt={"2rem"}>
                <Heading textAlign={"center"} size={"lg"}>All Projects</Heading>
                <SimpleGrid gap={"2rem"} minChildWidth={"400px"}>
                    {
                        projects.map((project: any) => {
                            // eslint-disable-next-line react/jsx-key
                            return <RepoCard name={project.name} description={project.description}
                                             url={project.html_url}
                                             stars={project.stargazers_count}
                                             forks={project.forks}
                                             license={project.license !== null ? project.license : "No License"}/>
                        })
                    }
                </SimpleGrid>
            </Flex>
        </div>
    )
}

function RepoCard(props: {
    name: string,
    description: string,
    stars: number,
    forks: number,
    license: string,
    url: string
}) {
    return (
        <Center>
            <Stack
                borderWidth="1px"
                borderRadius="lg"
                w={['100%']}
                maxW="500px"
                height={{sm: '476px', md: '20rem'}}
                direction={{base: 'column', md: 'row'}}
                bg={useColorModeValue('gray.300', 'gray.900')}
                boxShadow={'2xl'}
                marginInline={'2rem'}
                mt={'2rem'}
                mb={'2rem'}
                padding={4}
            >
                <Stack
                    flex={1}
                    flexDirection="column"
                    justifyContent="center"
                    alignItems="center"
                    p={1}
                    pt={2}
                >
                    <Heading fontSize={'2xl'} fontFamily={'body'}>
                        {props.name}
                    </Heading>
                    <Text
                        textAlign={'center'}
                        color={useColorModeValue('gray.700', 'gray.400')}
                        px={3}
                    >
                        {props.description}
                    </Text>
                    <Stack>
                        <Flex direction={"row"} gap={".4rem"} alignItems={"center"} justifyContent={"center"}>

                            <Flex direction={"row"} gap={".2rem"} alignItems={"center"} justifyContent={"center"}>
                                <FaStar size={'1.5rem'}/>
                                <Text
                                    textAlign={'center'}
                                    color={useColorModeValue('gray.700', 'gray.400')}
                                    px={3}
                                >
                                    {props.stars}
                                </Text>
                            </Flex>
                            <Flex direction={"row"} gap={".2rem"} alignItems={"center"} justifyContent={"center"}>
                                <VscRepoForked size={'1.5rem'}/>
                                <Text
                                    textAlign={'center'}
                                    color={useColorModeValue('gray.700', 'gray.400')}
                                    px={3}
                                >
                                    {props.forks}
                                </Text>
                            </Flex>
                            <Flex direction={"row"} gap={".2rem"} alignItems={"center"} justifyContent={"center"}>
                                <Tooltip label={props.license}>
                                    <Flex direction={"row"} gap={".2rem"} alignItems={"center"}
                                          justifyContent={"center"}>
                                        <FaBook size={'1.5rem'}/>
                                        <Text
                                            textAlign={'center'}
                                            color={useColorModeValue('gray.700', 'gray.400')}
                                            px={3}
                                        >
                                            License
                                        </Text>
                                    </Flex>
                                </Tooltip>
                            </Flex>
                        </Flex>
                    </Stack>

                    <Stack
                        width={'100%'}
                        direction={'row'}
                        padding={2}
                        justifyContent={'center'}
                        alignItems={'center'}
                    >
                        <NextLink href={props.url}>
                            <Button
                                colorScheme="telegram"
                                display="inline-flex"
                                alignItems="center"
                                justifyContent="center"
                                w={{base: 'full', sm: 'auto'}}
                                mb={{base: 2, sm: 0}}
                                size="lg"
                                cursor="pointer"
                                as={'a'}
                                href={props.url}
                            >
                                View
                                <Icon boxSize={4} ml={1} viewBox="0 0 20 20" fill="currentColor">
                                    <path
                                        fillRule="evenodd"
                                        d="M6.672 1.911a1 1 0 10-1.932.518l.259.966a1 1 0 001.932-.518l-.26-.966zM2.429 4.74a1 1 0 10-.517 1.932l.966.259a1 1 0 00.517-1.932l-.966-.26zm8.814-.569a1 1 0 00-1.415-1.414l-.707.707a1 1 0 101.415 1.415l.707-.708zm-7.071 7.072l.707-.707A1 1 0 003.465 9.12l-.708.707a1 1 0 001.415 1.415zm3.2-5.171a1 1 0 00-1.3 1.3l4 10a1 1 0 001.823.075l1.38-2.759 3.018 3.02a1 1 0 001.414-1.415l-3.019-3.02 2.76-1.379a1 1 0 00-.076-1.822l-10-4z"
                                        clipRule="evenodd"
                                    />
                                </Icon>
                            </Button>
                        </NextLink>
                    </Stack>
                </Stack>
            </Stack>
        </Center>
    )
}