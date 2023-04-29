/**
 * @author Ben Siebert <ben@mctzock.de>
 * @copyright (c) 2018-2021 Ben Siebert. All rights reserved.
 */

import React from 'react';
import {Box, Heading, Link, SimpleGrid, Text} from "@chakra-ui/react";
import NextImage from 'next/image';
import SocialIcons from "../components/SocialIcons";
import moment from "moment/moment";
import {NextSeo} from "next-seo";


export default function About() {

    let age = moment
        .duration(
            moment(
                new Date().getFullYear() +
                "-" +
                (new Date().getMonth() + 1) +
                "-" +
                new Date().getDate(),
                "YYYY-MM-DD"
            ).diff(moment("2007-03-20", "YYYY-MM-DD"))
        )
        .asYears()
        .toString()
        .split(".")[0];

    return (
        <>
            <NextSeo
                title="About | Ben Siebert - Software Engineer & Student"
            />
            <Box
                as="section"
                py="4"
                minH={"100vh"}
                w={"100%"}
                d={"flex"}
                flexDir={"column"}
                alignItems={"center"}
                justifyContent={"center"}
            >
                <SimpleGrid minChildWidth={"240px"} spacing={0} alignItems={"center"} justifyContent={"center"}>
                    <Box d={"flex"} flexDir={"column"} justifyContent={"center"} alignItems={"center"}>
                        <Box textAlign={"center"} d={"flex"} flexDir={"column"} width={"fit-content"}
                             marginInline={"4rem"}
                             marginBottom={"3rem"}>
                            <NextImage src={"https://avatars.githubusercontent.com/u/53553315"} width={350} height={350}
                                       style={{borderRadius: "50%"}}/>
                            <Heading mt={"1.6rem"}>
                                Ben Siebert
                            </Heading>
                            <Text color={"gray.400"}>Software Developer</Text>
                            <Text color={"gray.400"}>Student</Text>
                            <Box d={"flex"} flexDir={"row"} justifyContent={"center"} mt={"0.6rem"}>
                                <SocialIcons/>
                            </Box>
                            <Text fontSize={"1.5rem"} style={{fontFamily: "'Caveat', cursive"}}
                                  color={'green.300'}>&quot;Developing
                                Software
                                is like creating Art <br/> but in a way that I understand.&quot;</Text>
                        </Box>
                    </Box>
                    <Box marginInline={"4rem"}>
                        <Heading textAlign={'center'}>About</Heading>
                        <Text textAlign={'left'} fontSize={"1.6rem"}>
                            Hey I&#39;m Ben! I am a student based in Hattingen, Germany.
                            I am currently {age} years old. I&#39;ve started programming back in 2015 when I was 8 years
                            old.
                            Since then I&#39;ve learned a lot about computers in general and programming.
                            You can take a look at the <Link href={"/skills"} color={"blue.300"}>Skills</Link> that
                            I&#39;ve
                            learned. I believe in Open Source so much that all projects are open source and you can use
                            them
                            for free, take <Link href={"https://github.com/MCTzOCK"} color={"blue.300"}>a look</Link> at
                            the code and maybe learn something new.
                            In fact I believe so much in free and open software that even this website is open source.
                            I am most proud of the projects I&#39;ve created for the competition <Link
                            href={"https://jugend-forscht.de"} color={"blue.300"}>Jugend Forscht</Link>.
                            In the future I&#39;m looking forward to learn more skills and to create more projects that
                            I
                            enjoy and hopefully help others. If you want to support me on my journey, feel free to join
                            my <Link href={"https://discord.com/invite/YEHzrWVTp6"}
                                     color={"blue.300"}>Discord</Link> server.
                        </Text>
                    </Box>
                </SimpleGrid>
            </Box>
        </>
    )
}
