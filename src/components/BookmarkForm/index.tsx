'use client';

import { useState } from 'react';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '@/firebase';
import * as styles from './style.css.ts';

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

    // URLの形式チェック
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
      await addDoc(collection(db, 'bookmarks'), {
        url,
        title,
        tags: tags.split(',').map(tag => tag.trim()).filter(tag => tag),
        description,
        createdAt: serverTimestamp(),
      });
      
      // フォームリセット
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
    <form onSubmit={handleSubmit} className={styles.form}>
      <div className={styles.formGroup}>
        <label htmlFor="url" className={styles.label}>URL *</label>
        <input
          type="url"
          id="url"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          placeholder="https://example.com"
          required
          className={styles.input}
        />
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="title" className={styles.label}>タイトル</label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="例：Next.js 公式サイト"
          className={styles.input}
        />
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="tags" className={styles.label}>タグ</label>
        <input
          type="text"
          id="tags"
          value={tags}
          onChange={(e) => setTags(e.target.value)}
          placeholder="例：Next.js, React (カンマ区切り)"
          className={styles.input}
        />
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="description" className={styles.label}>説明</label>
        <textarea
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="このブックマークに関するメモ"
          className={styles.textarea}
        />
      </div>

      <button type="submit" className={styles.submitButton}>ブックマークを追加</button>
    </form>
  );
}
