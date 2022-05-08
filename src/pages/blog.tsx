import { Box, Flex, Heading, Input, SimpleGrid, Stack } from '@chakra-ui/react';
import { useState } from 'react';
import BlogCard from '../components/BlogCard';
import { getAllFilesFrontMatter } from '../lib/posts';

const Blog = ({ posts }: { posts: any }) => {

  const [postsFiltered, setPostsFiltered] = useState(posts);


  return (
    <Stack>
      <Box d="flex" alignItems={"center"} justifyContent={"center"} p="2.5rem" w="100%" bgColor={"messenger.900"}>
        <Input id="blog-search-field" placeholder='Search...' w={["80%"]} bg="white" color={"black"} _placeholder={{ color: "black" }} onChange={(v) => {
          const search = v.target.value.toLowerCase();
          if(search.startsWith("tag:")) {
            const tag = search.replace("tag:", "");
            setPostsFiltered(posts.filter((post: any) => post.tags.join(',').toLowerCase().includes(tag)));
            return;
          }
          if(search.startsWith("author:")) {
            const author = search.replace("author:", "");
            setPostsFiltered(posts.filter((post: any) => post.author.toLowerCase().includes(author)));
            return;
          }
          if(search.startsWith("date:")) {
            const date = search.replace("date:", "");
            setPostsFiltered(posts.filter((post: any) => post.publishedAt.toLowerCase().includes(date)));
            return;
          }
          if(search.startsWith("title:")) {
            const title = search.replace("title:", "");
            setPostsFiltered(posts.filter((post: any) => post.title.toLowerCase().includes(title)));
            return;
          }
          if(search.startsWith("summary:")) {
            const summary = search.replace("summary:", "");
            setPostsFiltered(posts.filter((post: any) => post.summary.toLowerCase().includes(summary)));
            return;
          }
          setPostsFiltered(posts.filter((post: any) => {
            return post.title.toLowerCase().includes(search) || post.author.toLowerCase().includes(search) || post.summary.toLowerCase().includes(search) || post.tags.join(',').toLowerCase().includes(search);
          }));
        }}/>
      </Box>
      <SimpleGrid minChildWidth={"320px"} spacing={8}>
        {postsFiltered.map((post: any) => (
          <BlogCard
            title={post.title}
            subtitle={post.author}
            description={post.summary}
            firstButton={{ href: '/blog/' + post.slug, text: 'Read more' }}
            tags={post.tags}
          />
        ))}
      </SimpleGrid>
    </Stack>
  );
};

export async function getStaticProps() {
  const data = await getAllFilesFrontMatter('blog');
  const posts = data.sort(
    (a, b) => Number(new Date(b.publishedAt)) - Number(new Date(a.publishedAt))
  );

  return { props: { posts } };
}

export default Blog;
