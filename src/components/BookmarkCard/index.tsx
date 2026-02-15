'use client';

import { Bookmark } from '@/types/bookmark';
import * as styles from './style.css';

interface BookmarkCardProps {
  bookmark: Bookmark;
  onDelete: (id: string) => void;
}

export default function BookmarkCard({ bookmark, onDelete }: BookmarkCardProps) {
  return (
    <div className={styles.card}>
      <div className={styles.content}>
        <a href={bookmark.url} target="_blank" rel="noopener noreferrer" className={styles.titleLink}>
          <h3 className={styles.title}>
            {bookmark.title || bookmark.url}
          </h3>
        </a>
        {bookmark.description && (
          <p className={styles.description}>
            {bookmark.description}
          </p>
        )}
        <div className={styles.tagsContainer}>
          {bookmark.tags?.map((tag) => (
            <span key={tag} className={styles.tag}>
              {tag}
            </span>
          ))}
        </div>
      </div>
      <div className={styles.actions}>
        <button onClick={() => onDelete(bookmark.id)} className={styles.deleteButton}>削除</button>
      </div>
    </div>
  );
}
