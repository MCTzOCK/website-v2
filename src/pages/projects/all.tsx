/**
 * @author Ben Siebert <ben@mctzock.de>
 * @copyright (c) 2018-2021 Ben Siebert. All rights reserved.
 */
import React, {useEffect, useState} from "react";
import {
    CircularProgress,
    Flex,
    Grid,
    Heading,
    Input,
    SimpleGrid,
    Stack,
    Text,
    useColorModeValue
} from "@chakra-ui/react";
import {FaBook, FaStar} from "react-icons/fa";
import {VscRepoForked} from "react-icons/vsc";
import {NextSeo} from "next-seo";
import {useRouter} from "next/router";

export default function All() {

    const [projects, setProjects] = useState([]);
    const [filteredProjects, setFilteredProjects] = useState([]);

    const [search, setSearch] = useState("");

    useEffect(() => {
        fetch("https://api.github.com/users/MCTzOCK/repos?per_page=100")
            .then(res => res.json())
            .then(data => {
                let p = data.sort((a: any, b: any) => {
                    return new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime();
                });

                p = p.filter((x: any) => !x.fork);

                setProjects(p);
                setFilteredProjects(p);
            });
    }, [])


    useEffect(() => {
        setFilteredProjects(projects.filter((x: any) => x.name.toLowerCase().includes(search.toLowerCase()) ));
    }, [search])

    return (
        <div>
            <NextSeo
                title="All Projects | Ben Siebert - Software Engineer & Student"
            />



            <Flex direction={"column"} gap={"2rem"} mt={"2rem"}
                  w={"100%"} alignItems={"center"} justifyContent={"center"}>
                <Heading textAlign={"center"} size={"lg"}>Promoted</Heading>
                <Grid
                    p={"2rem"}
                    templateColumns={["repeat(1, 1fr)", "repeat(2, 1fr)", "repeat(3, 1fr)", "repeat(4, 1fr)"]}
                    gap={6}
                >
                    <RepoCard name={"CodeUp"}
                              description={"Learn how to code and create your own projects!"}
                              stars={-1}
                              image={"https://codeup.space/codeup.png"}
                              forks={-1} license={"__disable_license_field"} url={"https://codeup.space"}/>
                    <RepoCard name={"InCode"}
                              description={"Create awesome Web Applications in your native language with InCode"}
                              stars={-1}
                              image={"https://avatars.githubusercontent.com/u/83610050?s=200&v=4"}
                              forks={-1} license={"__disable_license_field"} url={"/projects/incode"}/>
                    <RepoCard name={"SenOS"}
                              description={"Make the PC yours again with SenOS"}
                              stars={-1}
                              image={"https://avatars.githubusercontent.com/u/69637254?s=200&v=4"}
                              forks={-1} license={"__disable_license_field"} url={"/projects/senos"}/>
                    <RepoCard name={"Decryptor"}
                              description={"Encrypt and Decrypt any text with the Decryptor"}
                              stars={-1}
                              image={"/assets/project/decryptor.jpg"}
                              forks={-1} license={"__disable_license_field"} url={"/projects/decryptor"}/>
                </Grid>
            </Flex>

            {
                projects.length === 0 ? (
                    <>
                        <Flex w={"100%"} h={"100vh"} justifyContent={"center"} mt={"2rem"}>
                            <CircularProgress isIndeterminate color={"whatsapp.500"} size={"60px"} ml={"1rem"}/>
                        </Flex>
                    </>
                ) : (
                    <>
                        <Flex w={"100%"} justifyContent={"center"}>
                            <Input w={["75%", "50%"]} placeholder={"Search..."} onChange={(e: any) => setSearch(e.target.value)}/>
                        </Flex>
                    </>
                )
            }

            {
                filteredProjects.length === 0 ? (
                    <>
                        <Flex w={"100%"} h={"100vh"} justifyContent={"center"} mt={"2rem"}>
                            <Text>No Projects found</Text>
                        </Flex>
                    </>
                ) : null
            }


            <Flex direction={"column"} gap={"2rem"} mt={"2rem"}>
                <Heading textAlign={"center"} size={"lg"}>All Projects</Heading>
                <Grid gap={"2rem"} p={"2rem"}
                      templateColumns={["repeat(1, 1fr)", "repeat(1, 1fr)", "repeat(2, 1fr)", "repeat(2, 1fr)", "repeat(3, 1fr)", "repeat(5, 1fr)"]}
                >
                    {
                        filteredProjects.map((project: any) => {
                            // eslint-disable-next-line react/jsx-key
                            return <RepoCard name={project.name} description={project.description}
                                             url={project.html_url}
                                             stars={project.stargazers_count}
                                             forks={project.forks}
                                             license={project.license !== null ? project.license : "No License"}/>
                        })
                    }
                </Grid>
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
    url: string,
    image?: string;
}) {
    const router = useRouter();
    return (
        <>
            <Stack
                borderWidth="1px"
                borderRadius="lg"
                w={['100%']}
                maxW="500px"
                height={{sm: '476px', md: '20rem'}}
                direction={{base: 'column', md: 'row'}}
                bg={useColorModeValue('gray.300', 'gray.900')}
                mt={'2rem'}
                mb={'2rem'}
                padding={4}
                onClick={() => {
                    if(props.url.startsWith("/")){
                        router.push(props.url);
                    } else {

                        window.open(props.url, '_blank')
                    }
                }}
                cursor={"pointer"}
                _hover={{
                    transform: "scale(1.02)",
                    transition: "all 0.2s ease-in-out",
                    boxShadow: "2xl"
                }}
            >
                <Stack
                    flex={1}
                    flexDirection="column"
                    justifyContent="center"
                    alignItems="center"
                    p={1}
                    pt={2}
                >
                    {
                        props.image && (
                            <img src={props.image} alt={"Logo"} width={"100px"}
                                 height={"100px"}/>
                        )
                    }

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

                            {
                                props.stars !== -1 && (
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
                                )
                            }

                            {
                                props.forks !== -1 && (
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
                                )
                            }

                            {
                                props.license !== "__disable_license_field" && (
                                    <Flex direction={"row"} gap={".2rem"} alignItems={"center"} justifyContent={"center"}>
                                        <Flex direction={"row"} gap={".2rem"} alignItems={"center"}
                                              justifyContent={"center"}>
                                            <FaBook size={'1.5rem'}/>
                                            <Text
                                                textAlign={'center'}
                                                color={useColorModeValue('gray.700', 'gray.400')}
                                                px={3}
                                            >
                                                {props.license ? (
                                                    // @ts-ignore
                                                    props.license.spdx_id ? props.license.spdx_id : props.license
                                                ) : "No License"}
                                            </Text>
                                        </Flex>
                                    </Flex>
                                )
                            }
                        </Flex>
                    </Stack>
                </Stack>
            </Stack>
        </>
    )
}