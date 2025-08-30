'use client';

import { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export default function BookmarkForm() {
  const [url, setUrl] = useState('');
  const [title, setTitle] = useState('');
  const [tags, setTags] = useState('');
  const [memo, setMemo] = useState('');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const bookmarkData = {
      url,
      title,
      tags: tags.split(',').map(tag => tag.trim()),
      memo,
    };
    console.log(bookmarkData);
    // ここでFirebaseへの保存処理を後で追加します
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
        id="memo"
        label="メモ"
        multiline
        rows={4}
        value={memo}
        onChange={(e) => setMemo(e.target.value)}
        placeholder="このブックマークに関するメモ"
      />
      <Button type="submit" variant="contained" sx={{ mt: 2 }}>ブックマークを追加</Button>
    </Box>
  );
}
