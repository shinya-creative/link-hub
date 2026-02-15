import BookmarkForm from '@/components/BookmarkForm';
import BookmarkList from '@/components/BookmarkList';
import * as styles from './page.css';

export default function HomePage() {
  return (
    <main className={styles.main}>
      <h1 className={styles.title}>Link Hub</h1>
      <BookmarkForm />
      <BookmarkList />
    </main>
  );
}
