import getDateFormat from '@/lib/content/getDateFormat';
import Link from 'next/link';
import styles from './ArticleCard.module.css';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const ArticleCard = (props: any) => {
  const { article } = props;
  return article ? (
    <Link className="unstyled" href={`/articles/${article.slug}`}>
      <div className="articleCard">
        <h3>{article.title}</h3>
        <p className={styles.articleDate}>{getDateFormat(article.date)}</p>
        <p>{article.bio}</p>
      </div>
    </Link>
  ) : null;
};

export default ArticleCard;
