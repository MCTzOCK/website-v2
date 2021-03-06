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
                title="SenOS | Ben Siebert - Software Engineer & Student"
            />
            <MajorProjectHero
            slogan={{
                start: "Make the",
                middle: "PC yours again",
                end: "with SenOS"
            }}
            description={"SenOS is a custom operating system GUI designed for beginners. It offers many features like big buttons and many custom written programs."}
            button={{
                text: "Open GitHub",
                url: "https://github.com/coolescoden/SenOS"
            }}
            image={"senos-frame.png"}
        />
        </>

    )
}