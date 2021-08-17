import BlogContent from '../../components/BlogContent';
import Layout from '../../components/Layout';
import getContent from '../../api/content';
import getUser from '../../api/user';

export default function Post({ content, pages, user }) {
  return (
    <Layout pages={pages}>
      <BlogContent user={user} content={content} />
    </Layout>
  );
}
export async function getStaticPaths() {
  const posts = await getContent('blog');
  return {
    paths: posts.map(post => ({
      params: {
        postName: post.slug
      }
    })),
    fallback: false
  };
}
export async function getStaticProps({ params }) {
  const content = await getContent('blog', params.postName);
  const pages = await getContent('page');
  const user = await getUser(content.user_created);

  return {
    props: { content, pages, user }
  };
}
