import styles from './cardPost.module.scss';
import { FiUser, FiCalendar } from 'react-icons/fi';
import Link from 'next/link';

interface CardPostProps {
  title: string;
  subTitle: string;
  createdAt: string;
  author: string;
}

export default function CardPost({
  title,
  subTitle,
  createdAt,
  author,
}: CardPostProps) {
  return (
    <div className={styles.container}>
      <Link href="/post/post">
        <a>
          <h1>{title}</h1>
          <p>{subTitle}</p>
          <div>
            <span>
              <FiUser />
              {createdAt}
            </span>
            <span>
              <FiCalendar />
              {author}
            </span>
          </div>
        </a>
      </Link>
    </div>
  );
}