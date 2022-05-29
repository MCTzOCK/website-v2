/**
 * @author Ben Siebert <ben@mctzock.de>
 * @copyright (c) 2018-2021 Ben Siebert. All rights reserved.
 */
import Script from "next/script";
import {Flex} from "@chakra-ui/react";

export default function News() {
    return (
        <Flex alignItems={"center"} w={"100%"} justifyContent={"center"} textAlign={"center"}>
            <a className="twitter-timeline" data-lang="en" data-theme="dark"
               href="https://twitter.com/OfficialMCTzOCK?ref_src=twsrc%5Etfw">Tweets by OfficialMCTzOCK</a>
            <Script async src="https://platform.twitter.com/widgets.js" charSet="utf-8"></Script>
        </Flex>
    )
}