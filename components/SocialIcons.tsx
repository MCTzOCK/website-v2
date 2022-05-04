/**
 * @author Ben Siebert <ben@mctzock.de>
 * @copyright (c) 2018-2021 Ben Siebert. All rights reserved.
 */


import {ButtonGroup, IconButton} from "@chakra-ui/react";
import {FaDiscord, FaGithub, FaInstagram, FaTwitter, FaYoutube} from "react-icons/fa";
import * as React from "react";

export default function SocialIcons() {
    return (
        <ButtonGroup variant="ghost">
            <IconButton as="a" href="https://github.com/MCTzOCK" aria-label="GitHub"
                        icon={<FaGithub fontSize="1.25rem"/>}/>
            <IconButton
                as="a"
                href="https://twitter.com/OfficialMCTzOCK"
                aria-label="Twitter"
                icon={<FaTwitter fontSize="1.25rem"/>}
            />
            <IconButton
                as="a"
                href="https://www.youtube.com/channel/UCYpiMr7urCu8V8Lv4-6ikyw"
                aria-label="YouTube"
                icon={<FaYoutube fontSize="1.25rem"/>}
            />
            <IconButton as="a" aria-label={"Instagram"} href={"https://instagram.com/ben.sbrt"} icon={<FaInstagram fontSize={"1.25rem"} />} />
            <IconButton
                as="a"
                href="https://discord.com/invite/YEHzrWVTp6"
                aria-label="Discord"
                icon={<FaDiscord fontSize="1.25rem"/>}
            />
        </ButtonGroup>
    )
}