import React from 'react';
import BookmarkCard from '.';

const sample = {
  id: '1',
  url: 'https://example.com',
  title: 'Example',
  description: 'Sample description',
  tags: ['tag1', 'tag2'],
  createdAt: {} as any,
};

export default {
  title: 'Components/BookmarkCard',
  component: BookmarkCard,
};

export const Default = {
  render: () => <BookmarkCard bookmark={sample as any} onDelete={() => {}} />,
};
