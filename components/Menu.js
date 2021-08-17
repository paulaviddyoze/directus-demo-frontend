import styles from '../styles/Home.module.css';
import Link from 'next/link';

const Menu = ({ items }) => {
  return (
    <>
      <ul className={styles.menuList}>
        {items.map((item, index) => (
          <li key={index}>
            <Link href={item.slug === '/home' ? '/' : `/${item.slug}`}>
              <a>{item.title}</a>
            </Link>
          </li>
        ))}
        <li>
          <Link href="/blog">
            <a>Blog</a>
          </Link>
        </li>
      </ul>
    </>
  );
};
export default Menu;
