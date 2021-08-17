import Image from 'next/image';
import styles from '../styles/Home.module.css';

const PageContent = ({ content }) => {
  return (
    <>
      {content?.title ? (
        <>
          <h1>{content.title}</h1>
          <div>
            {content.image && (
              <Image
                src={`http://localhost:8055/assets/${content.image}`}
                alt=""
                width={100}
                height={100}
              />
            )}
            {content.video && (
              <div className={styles['video-container']}>
                <video
                  src={`http://localhost:8055/assets/${content.video}`}
                  controls
                />
              </div>
            )}
          </div>
          <div dangerouslySetInnerHTML={{ __html: content.content }} />
        </>
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
};
export default PageContent;
