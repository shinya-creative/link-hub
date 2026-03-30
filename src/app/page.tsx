import { BookmarkForm } from '@/components/Feature/Bookmark/BookmarkForm/BookmarkForm';
import { BookmarkList } from '@/components/Feature/Bookmark/BookmarkList/BookmarkList';
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
