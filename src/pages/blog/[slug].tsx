import {NextSeo} from 'next-seo';
import {useRouter} from 'next/router';
import {
    Box,
    Flex,
    Heading,
    Text,
    Link as ChakraLink,
    useColorModeValue,
    Icon,
} from '@chakra-ui/react';
import {MDXProvider} from '@mdx-js/react';
import {MdEdit} from 'react-icons/md';
import dayjs from 'dayjs';
import hydrate from 'next-mdx-remote/hydrate';
import {getFileBySlug, getFiles} from '../../lib/posts';
import Image from 'next/image';
import CodeBlock from '../../components/md/CodeBlock';
import {
    CustomLink,
    InlineCode,
    ListItem,
    OrderedList,
    UnorderedList,
} from '../../components/md/common';

const BlogPost = ({
                      mdxSource,
                      frontMatter,
                  }: {
    mdxSource: any;
    frontMatter: any;
}) => {
    const {push} = useRouter();

    const color = useColorModeValue('gray.700', 'gray.400');

    const content = hydrate(mdxSource, {
        components: {
            // @ts-ignore
            h1: (props: any) => (
                <Heading size="xl" {...props}>
                    {props.children}
                </Heading>
            ),
            // @ts-ignore
            h2: (props: any) => (
                <Heading size="lg" {...props}>
                    {props.children}
                </Heading>
            ),
            // @ts-ignore
            h3: (props: any) => (
                <Heading size="md" {...props}>
                    {props.children}
                </Heading>
            ),
            // @ts-ignore
            h4: (props: any) => (
                <Heading size="sm" {...props}>
                    {props.children}
                </Heading>
            ),
            // @ts-ignore
            h5: (props: any) => (
                <Heading size="sm" {...props}>
                    {props.children}
                </Heading>
            ),
            // @ts-ignore
            h6: (props: any) => (
                <Heading size="sm" {...props}>
                    {props.children}
                </Heading>
            ),

            // @ts-ignore
            p: (props: any) => (
                <Text fontSize="1.6rem" {...props} />
            ),

            // @ts-ignore
            a: CustomLink,
            // @ts-ignore
            ul: UnorderedList,
            // @ts-ignore
            ol: OrderedList,
            // @ts-ignore
            li: ListItem,
            // @ts-ignore
            inlineCode: InlineCode,
            // @ts-ignore
            code: CodeBlock,
        },
    });

    const title = frontMatter.title;
    const description = frontMatter.summary;
    const url = `https://ben-siebert.de/blog/${frontMatter.slug}`;

    return (
        <>
            <NextSeo
                title={frontMatter.title + ' | Ben Siebert - Blog'}
                description={frontMatter.summary}
                openGraph={{
                    type: 'website',
                    locale: 'en_US',
                    url: 'https://ben-siebert.de/blog/' + frontMatter.slug,
                    site_name: frontMatter.title + ' | Ben Siebert - Blog',
                    images: [
                        {
                            url: 'https://ben-siebert.de/assets/brand/cartoon.jpg',
                            width: 512,
                            height: 512,
                            alt: 'Ben Siebert - Blog',
                            type: 'image/jpg',
                        },
                    ],
                }}
                twitter={{
                    handle: '@OfficialMCTzOCK',
                    cardType: 'summary_large_image',
                }}
            />
            <MDXProvider>
                <Box
                    as="section"
                    px={{md: '10', lg: '20', xl: '40'}}
                    py="4"
                    fontSize="16px"
                    marginInline={'.5rem'}
                >
                    <Box as="header" textAlign="center">
                        <Heading as="h1" py="4" size="2xl">
                            {frontMatter.title}
                        </Heading>

                        <Flex direction="column">
                            <Text fontSize="16px" color={color} py="1">
                                {frontMatter.author} /{' '}
                                {dayjs(frontMatter.publishedAt).format('MMMM DD, YYYY')} /{' '}
                                {frontMatter.readingTime.text}
                            </Text>
                        </Flex>
                    </Box>
                    <Box as="article">{content}</Box>
                </Box>
            </MDXProvider>
        </>
    );
};

export const getStaticPaths = async () => {
    const posts = await getFiles('blog');

    return {
        paths: posts.map((post) => ({
            params: {
                slug: post.replace(/\.mdx/, ''),
            },
        })),

        fallback: false,
    };
};

export const getStaticProps = async ({params}: { params: any }) => {
    const post = await getFileBySlug('blog', params.slug);

    return {props: post};
};

export default BlogPost;
