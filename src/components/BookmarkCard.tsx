'use client';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import Button from '@mui/material/Button';
import { Bookmark } from '@/types/bookmark';

interface BookmarkCardProps {
  bookmark: Bookmark;
}

export default function BookmarkCard({ bookmark }: BookmarkCardProps) {
  return (
    <Card sx={{ mb: 2 }}>
      <CardContent>
        <Link href={bookmark.url} target="_blank" rel="noopener noreferrer" sx={{ textDecoration: 'none', wordBreak: 'break-all' }}>
          <Typography variant="h6" component="div">
            {bookmark.title || bookmark.url}
          </Typography>
        </Link>
        {bookmark.description && (
          <Typography sx={{ mt: 1.5 }} color="text.secondary">
            {bookmark.description}
          </Typography>
        )}
        <Box sx={{ mt: 1.5 }}>
          {bookmark.tags?.map((tag) => (
            <Chip key={tag} label={tag} size="small" sx={{ mr: 0.5, mb: 0.5 }} />
          ))}
        </Box>
      </CardContent>
      <CardActions>
        <Button size="small">削除</Button>
      </CardActions>
    </Card>
  );
}
