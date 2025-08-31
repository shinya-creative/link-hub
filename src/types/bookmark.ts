import { Timestamp } from 'firebase/firestore';

export interface Bookmark {
  id: string;
  url: string;
  title?: string;
  tags: string[];
  description?: string;
  createdAt: Timestamp;
}
