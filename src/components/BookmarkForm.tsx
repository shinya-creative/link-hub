'use client';

import { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '@/firebase';

export default function BookmarkForm() {
  const [url, setUrl] = useState('');
  const [title, setTitle] = useState('');
  const [tags, setTags] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!url) {
      alert('URLは必須です。');
      return;
    }

    // URLの形式をチェック
    try {
      const urlObject = new URL(url);
      if (urlObject.protocol !== 'http:' && urlObject.protocol !== 'https:') {
        throw new Error('無効なプロトコルです。');
      }
    } catch (error) {
      alert('有効なURL形式を入力してください。(例: https://example.com)');
      return;
    }

    try {
      const docRef = await addDoc(collection(db, 'bookmarks'), {
        url,
        title,
        tags: tags.split(',').map(tag => tag.trim()).filter(tag => tag),
        description,
        createdAt: serverTimestamp(),
      });
      
      // フォームをリセット
      setUrl('');
      setTitle('');
      setTags('');
      setDescription('');

      alert('ブックマークが追加されました！');
    } catch (e) {
      console.error('Error adding document: ', e);
      alert('ブックマークの追加に失敗しました。');
    }
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        '& .MuiTextField-root': { m: 1, width: '100%' },
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '100%',
        maxWidth: '500px',
        margin: 'auto',
      }}
      noValidate
      autoComplete="off"
    >
      <TextField
        required
        id="url"
        label="URL"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        placeholder="https://example.com"
      />
      <TextField
        id="title"
        label="タイトル"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="例：Next.js 公式サイト"
      />
      <TextField
        id="tags"
        label="タグ"
        value={tags}
        onChange={(e) => setTags(e.target.value)}
        placeholder="例：Next.js, React, TypeScript (カンマ区切り)"
      />
      <TextField
        id="description"
        label="メモ"
        multiline
        rows={4}
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="このブックマークに関するメモ"
      />
      <Button type="submit" variant="contained" sx={{ mt: 2 }}>ブックマークを追加</Button>
    </Box>
  );
}
