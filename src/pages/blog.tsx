import { getAllFilesFrontMatter } from '../lib/posts';

const Blog = ({ posts }: { posts: any }) => {
  console.log(posts);
  return <></>;
};

export async function getStaticProps() {
  const data = await getAllFilesFrontMatter('blog');
  const posts = data.sort(
    (a, b) => Number(new Date(b.publishedAt)) - Number(new Date(a.publishedAt))
  );

  return { props: { posts } };
}

export default Blog;
