/**
 * @author Ben Siebert <ben@mctzock.de>
 * @copyright (c) 2018-2021 Ben Siebert. All rights reserved.
 */
import ProjectCard from "../../components/ProjectCard";
import {SimpleGrid} from "@chakra-ui/react";

export default function all() {
    return (
        <SimpleGrid minChildWidth={350} minH={"100vh"} minW={"100%"} mt={"2rem"} mb={"2rem"}>
            <ProjectCard title={"InCode"} subtitle={"Jugend Forscht"} description={"Create awesome Web Applications in your native language with InCode"} firstButton={{
                text: "Learn more",
                href: "/projects/incode"
            }}/>
            <ProjectCard title={"SenOS"} subtitle={"Jugend Forscht"} description={"Make the PC yours again with SenOS"} firstButton={{
                text: "Learn more",
                href: "/projects/senos"
            }}/>
            <ProjectCard title={"Decryptor"} subtitle={"Jugend Forscht"} description={"Encrypt and Decrypt any text with the Decryptor"} firstButton={{
                text: "Learn more",
                href: "/projects/decryptor"
            }}/>
            <ProjectCard title={"AdminTools"} subtitle={"Minecraft"} description={"AdminTools is a minecraft Plugin that contains all needed tools for server admins."} firstButton={{
                text: "Learn more",
                href: "https://www.spigotmc.org/resources/admintools.86179/"
            }}/>
            <ProjectCard title={"HomeTPA"} subtitle={"Minecraft"} description={"HomeTPA is a minecraft Plugin with essential functionality for homes and tpas."} firstButton={{
                text: "Learn more",
                href: "https://www.spigotmc.org/resources/tpa-home.86679/"
            }}/>
            <ProjectCard title={"MurderMystery"} subtitle={"Minecraft"} description={"MurderMystery is a minecraft Plugin where you can either be the murder, a detective or an innocent. Depending on your role you have weapons and different tasks."} firstButton={{
                text: "Learn more",
                href: "https://www.spigotmc.org/resources/murdermystery.87606/"
            }}/>
            <ProjectCard title={"Minecraft Port Finder"} subtitle={"Minecraft"} description={"Minecraft Port Finder is a program which can scan a whole host for running Minecraft Servers."} firstButton={{
                text: "Learn more",
                href: "https://github.com/MCTzOCK/MinecraftPortFinder"
            }}/>
            <ProjectCard title={"Lobby"} subtitle={"Minecraft"} description={"I've also wrote many Lobby Plugins for Minecraft Servers."} firstButton={{
                text: "Learn more",
                href: "https://www.spigotmc.org/resources/lobby-system-1-8-1-16-x.88615/"
            }}/>
            <ProjectCard title={"Craftions API"} subtitle={"Minecraft"} description={"The Craftions API is an Minigame API for Minecraft Plugins."} firstButton={{
                text: "Learn more",
                href: "https://www.spigotmc.org/resources/craftions-api.93384/"
            }}/>
            <ProjectCard title={"LaserTag"} subtitle={"Minecraft"} description={"I've developed LaserTag in Minecraft. You can shoot other players and earn points."} firstButton={{
                text: "Learn more",
                href: "https://github.com/CraftionsMC/LaserTag"
            }}/>
            <ProjectCard title={"RageMode"} subtitle={"Minecraft"} description={"RageMode is a Minecraft Gamemode where every player can be killed with one hit."} firstButton={{
                text: "Learn more",
                href: "https://github.com/CraftionsMC/Ragemode"
            }}/>
            <ProjectCard title={"encrypt-folder"} subtitle={"Library"} description={"encrypt-folder is an API for encrypting and decrypting whole folders using either Node.JS or the CLI implementation."} firstButton={{
                text: "Learn more",
                href: "https://www.npmjs.com/package/encrypt-folder"
            }}/>
            <ProjectCard title={"@incodelang/accounts"} subtitle={"Library"} description={"@incodelang/accounts is a npm package that allows you to easily integrate an account system in your application."} firstButton={{
                text: "Learn more",
                href: "https://www.npmjs.com/package/@incodelang/accounts"
            }}/>
            <ProjectCard title={"@incodelang/accounts-client"} subtitle={"Library"} description={"@incodelang/accounts-client is the web client for my npm package @incodelang/accounts"} firstButton={{
                text: "Learn more",
                href: "https://www.npmjs.com/package/@incodelang/accounts-client"
            }}/>
            <ProjectCard title={"@incodelang/urlshorter"} subtitle={"Library"} description={"@incodelang/urlshorter is a npm package that allows you to create an URL Shorter."} firstButton={{
                text: "Learn more",
                href: "https://www.npmjs.com/package/@incodelang/urlshorter"
            }}/>
            <ProjectCard title={"nodejs-port-scanner"} subtitle={"Library"} description={"nodejs-port-scanner is a npm package that allows you to scan for open ports on a specific host."} firstButton={{
                text: "Learn more",
                href: "https://www.npmjs.com/package/nodejs-port-scanner"
            }}/>
            <ProjectCard title={"JavaMySQL"} subtitle={"Library"} description={"JavaMySQL is a Java Library that allows you to connect and manage a MySQL Database."} firstButton={{
                text: "Learn more",
                href: "https://github.com/MCTzOCK/JavaMySQL"
            }}/>
            <ProjectCard title={"RSAKeys"} subtitle={"Library"} description={"RSAKeys is a Java Library that allows you to encrypt and decrypt Text with the RSA Encryption."} firstButton={{
                text: "Learn more",
                href: "https://github.com/MCTzOCK/RSAKeys"
            }}/>
        </SimpleGrid>
    )
}