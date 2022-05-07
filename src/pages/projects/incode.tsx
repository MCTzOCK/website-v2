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
                title="InCode | Ben Siebert - Software Engineer & Student"
            />
            <MajorProjectHero
            slogan={{
                start: "Create awesome",
                middle: "Web Applications",
                end: "in your native language with InCode"
            }}
            description={"InCode is a native language based framework for creating web applications. It converts native language into pure JavaScript. InCode has a minimal learning curve and can also be used to learn JavaScript."}
            button={{
                text: "Open Editor",
                url: "https://incodelang.de/editor"
            }}
            image={"incode-frame.png"}
        />
        </>

    )
}