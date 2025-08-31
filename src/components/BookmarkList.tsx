'use client';

import { useState, useEffect } from 'react';
import { collection, query, onSnapshot, orderBy } from 'firebase/firestore';
import { db } from '@/firebase';
import { Bookmark } from '@/types/bookmark';
import BookmarkCard from './BookmarkCard';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import CircularProgress from '@mui/material/CircularProgress';

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

  if (loading) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
        <CircularProgress />
      </Box>
    );
  }

  return (
    <Box sx={{ width: '100%', maxWidth: '800px', mt: 4 }}>
      {bookmarks.length === 0 ? (
        <Typography>ブックマークはまだありません。</Typography>
      ) : (
        bookmarks.map((bookmark) => (
          <BookmarkCard key={bookmark.id} bookmark={bookmark} />
        ))
      )}
    </Box>
  );
}
