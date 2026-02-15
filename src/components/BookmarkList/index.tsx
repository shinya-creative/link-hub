'use client';

import { useState, useEffect } from 'react';
import { collection, query, onSnapshot, orderBy, doc, deleteDoc } from 'firebase/firestore';
import { db } from '@/firebase';
import { Bookmark } from '@/types/bookmark';
import BookmarkCard from '../BookmarkCard';
import * as styles from './style.css';

export default function BookmarkList() {
  const [bookmarks, setBookmarks] = useState<Bookmark[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const q = query(collection(db, 'bookmarks'), orderBy('createdAt', 'desc'));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const bookmarksData: Bookmark[] = [];
      querySnapshot.forEach((doc) => {
        bookmarksData.push({ id: doc.id, ...doc.data() } as Bookmark);
      });
      setBookmarks(bookmarksData);
      setLoading(false);
    }, (error) => {
      console.error("Error fetching bookmarks: ", error);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const handleDelete = async (id: string) => {
    try {
      await deleteDoc(doc(db, 'bookmarks', id));
    } catch (error) {
      console.error("Error deleting document: ", error);
      alert('ブックマークの削除中にエラーが発生しました。');
    }
  };

  if (loading) {
    return (
      <div className={styles.loaderContainer}>
        <div className={styles.loader}></div>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      {bookmarks.length === 0 ? (
        <p className={styles.emptyMessage}>ブックマークはまだありません。</p>
      ) : (
        bookmarks.map((bookmark) => (
          <BookmarkCard key={bookmark.id} bookmark={bookmark} onDelete={handleDelete} />
        ))
      )}
    </div>
  );
}
