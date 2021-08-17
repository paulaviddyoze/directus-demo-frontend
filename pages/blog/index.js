import Link from 'next/link';
import Image from 'next/image';
import styles from '../../styles/Home.module.css';
import Layout from '../../components/Layout';
import getContent from '../../api/content';

export default function BlogList({ posts, pages }) {
  return (
    <Layout pages={pages}>
      <h1>Blog</h1>
      <ul className={styles['blog-list']}>
        {posts?.map((post, index) => (
          <li key={index}>
            <Link href={`/blog/${post.slug}`}>
              <a>
                <div className={styles['blog-list__title']}>{post.title}</div>
                <Image
                  src={`http://localhost:8055/assets/${post.image}`}
                  alt={post.title}
                  height={150}
                  width={150}
                />
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </Layout>
  );
}

export async function getStaticProps() {
  const posts = await getContent('blog');
  const pages = await getContent('page');

  return {
    props: { posts, pages }
  };
}
