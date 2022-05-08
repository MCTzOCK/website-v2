import {
    Alert,
    AlertDescription,
    AlertIcon,
    AlertTitle,
    Box,
    Flex,
    Heading,
    Input,
    SimpleGrid,
    Stack, Text,
} from '@chakra-ui/react';
import {NextSeo} from 'next-seo';
import BlogCard from '../components/BlogCard';
import {getAllFilesFrontMatter} from '../lib/posts';
import {useEffect, useState} from "react";

const Blog = ({posts}: { posts: any }) => {
    const [postsFiltered, setPostsFiltered] = useState(posts);

    function rerender(search: string) {
        if (search.startsWith('tag:')) {
            const tag = search.replace('tag:', '');
            setPostsFiltered(
                posts.filter((post: any) =>
                    post.tags.join(',').toLowerCase().includes(tag)
                )
            );
            return;
        }
        if (search.startsWith('author:')) {
            const author = search.replace('author:', '');
            setPostsFiltered(
                posts.filter((post: any) =>
                    post.author.toLowerCase().includes(author)
                )
            );
            return;
        }
        if (search.startsWith('date:')) {
            const date = search.replace('date:', '');
            setPostsFiltered(
                posts.filter((post: any) =>
                    post.publishedAt.toLowerCase().includes(date)
                )
            );
            return;
        }
        if (search.startsWith('title:')) {
            const title = search.replace('title:', '');
            setPostsFiltered(
                posts.filter((post: any) =>
                    post.title.toLowerCase().includes(title)
                )
            );
            return;
        }
        if (search.startsWith('summary:')) {
            const summary = search.replace('summary:', '');
            setPostsFiltered(
                posts.filter((post: any) =>
                    post.summary.toLowerCase().includes(summary)
                )
            );
            return;
        }
        setPostsFiltered(
            posts.filter((post: any) => {
                return (
                    post.title.toLowerCase().includes(search) ||
                    post.author.toLowerCase().includes(search) ||
                    post.summary.toLowerCase().includes(search) ||
                    post.tags.join(',').toLowerCase().includes(search)
                );
            })
        );
    }

    useEffect(() => {
        const x = setInterval(() => {
            const search = (document.getElementById('blog-search-field') as HTMLInputElement).value;
            rerender(search);
        }, 100);
        return () => clearInterval(x);
    }, [])

    return (
        <>
            <NextSeo title="Blog | Ben Siebert"
                     description="Browse my Blogs. Read something about me and my personal thoughts about technology"/>
            <Stack>
                <Box
                    d="flex"
                    alignItems={'center'}
                    justifyContent={'center'}
                    p="2.5rem"
                    w="100%"
                    flexDirection={"column"}
                    bgColor={'twitter.600'}
                >
                    <Heading size={"xl"} color={"gray.900"}>Blog</Heading>
                    <Text mb={"1rem"} color={"gray.900"} textAlign={"center"}>
                        In my blog you can read about my personal thoughts about technology and my life.
                    </Text>
                    <Input
                        id="blog-search-field"
                        placeholder="Search..."
                        w={['80%']}
                        bg="white"
                        color={'black'}
                        _placeholder={{color: 'black'}}
                        onChange={(v) => {
                            rerender(v.target.value.toLowerCase());
                        }}
                    />
                </Box>
                {postsFiltered.length === 0 ? (
                    <>
                        <Alert status="error">
                            <AlertIcon/>
                            <AlertTitle>No Blogs found!</AlertTitle>
                            <AlertDescription>
                                No Blog Posts were found matching your request.
                            </AlertDescription>
                        </Alert>
                    </>
                ) : null}
                <SimpleGrid minChildWidth={'320px'} spacing={8}>
                    {postsFiltered.map((post: any) => (
                        <BlogCard
                            key={post.slug}
                            title={post.title}
                            subtitle={post.author}
                            description={post.summary}
                            date={post.publishedAt}
                            firstButton={{href: '/blog/' + post.slug, text: 'Read more'}}
                            tags={post.tags}
                        />
                    ))}
                </SimpleGrid>
            </Stack>
        </>
    );
};

export async function getStaticProps() {
    const data = await getAllFilesFrontMatter('blog');
    const posts = data.sort(
        (a, b) => Number(new Date(b.publishedAt)) - Number(new Date(a.publishedAt))
    );

    return {props: {posts}};
}

export default Blog;
