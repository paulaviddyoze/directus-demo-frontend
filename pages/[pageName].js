import Layout from '../components/Layout';
import PageContent from '../components/PageContent';
import getContent from '../api/content';

export default function Page({ content, pages }) {
  return (
    <Layout pages={pages}>
      <PageContent content={content} />
    </Layout>
  );
}
export async function getStaticPaths() {
  const pages = await getContent('page');
  return {
    paths: pages.map(page => ({
      params: {
        pageName: page.slug
      }
    })),
    fallback: false
  };
}
export async function getStaticProps({ params }) {
  const content = await getContent('page', params.pageName);
  const pages = await getContent('page');

  return {
    props: { content, pages }
  };
}
