import Layout from '../components/Layout';
import PageContent from '../components/PageContent';
import getContent from '../api/content';

export default function Home({ content, pages }) {
  return (
    <Layout pages={pages}>
      <PageContent content={content} />
    </Layout>
  );
}

export async function getStaticProps() {
  const content = await getContent('page', 'home');
  const pages = await getContent('page');

  return {
    props: { content, pages }
  };
}
