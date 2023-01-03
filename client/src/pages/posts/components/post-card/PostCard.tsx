import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import { CardMedia } from '@mui/material';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import MoreVertIcon from '@mui/icons-material/MoreVert';

import { IPost } from '../../interfaces/post-card';
import useAppTranslation from 'src/shared/hooks/utility/useAppTranslation';
import { DateFormats } from 'src/shared/enums/dates';
import useDateTranslate from 'src/shared/hooks/utility/useDateInterpolation';
import PostCardDescription from '../post-card-description/PostCardDescription';

interface Props {
  post: IPost;
}

export default function PostCard({ post }: Props) {
  const [t] = useAppTranslation();

  const { translateDate } = useDateTranslate();

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: 'red' }} aria-label="user-avatar">
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="haha"
        subheader={translateDate(
          'date-formatter',
          new Date(post.createdAt),
          DateFormats.LONG
        )}
      />
      <CardContent>
        <PostCardDescription description={post.description} />
      </CardContent>
      {post.imageData && (
        <CardMedia
          component="img"
          height="194"
          image={post.imageData.imageUrl}
          alt="Paella dish"
        />
      )}
    </Card>
  );
}
