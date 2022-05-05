/**
 * @author Ben Siebert <ben@mctzock.de>
 * @copyright (c) 2018-2021 Ben Siebert. All rights reserved.
 */
import {Box, Button, Heading} from "@chakra-ui/react";
import Link from "next/link";

export default function NotFound() {
    return (
        <Box
            as="section"
            d="flex"
            alignItems="center"
            flexDir="column"
            textAlign="center"
            justifyContent={"center"}
            py="4"
            minH={"100vh"}
            w={"100%"}
        >
            <Heading fontSize="lg"> 404 </Heading>
            <Heading fontWeight={1000}>That page doens&#39;t exist!</Heading>
            <Link href={"/"}>
                <Button mt={"2.5rem"} colorScheme={"whatsapp"}> Home</Button>
            </Link>
        </Box>
    );
}