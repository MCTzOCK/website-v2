/**
 * @author Ben Siebert <ben@mctzock.de>
 * @copyright (c) 2018-2021 Ben Siebert. All rights reserved.
 */
import MajorProjectHero from "../../components/MajorProjectHero";
import {NextSeo} from "next-seo";

export default function InCode() {
    return (
        <>
            <NextSeo
                title="Home | Ben Siebert - Software Engineer & Student"
            />
            <MajorProjectHero
            slogan={{
                start: "Encrypt and Decrypt",
                middle: "any text",
                end: "with the Decryptor"
            }}
            description={"The Decryptor makes it possible to encrypt and decrypt any text with a simple but secure encryption algorithm invented by me."}
            button={{
                text: "Open GitHub",
                url: "https://github.com/coolescoden/SenOS"
            }}
            button2={{
                text: "Download",
                url: "https://download.mctzock.de/decryptor_jufo2020.zip"
            }}
            image={"decryptor-frame.png"}
        />
        </>


    )
}