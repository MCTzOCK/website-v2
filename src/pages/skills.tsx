/**
 * @author Ben Siebert <ben@mctzock.de>
 * @copyright (c) 2018-2021 Ben Siebert. All rights reserved.
 */

import {default as SkillsComponent} from '../components/Skills';
import {NextSeo} from "next-seo";

export default function Skills(){
    return (
        <>
            <NextSeo
                title="Skills | Ben Siebert - Software Engineer & Student"
            />
            <SkillsComponent />
        </>
    )
}