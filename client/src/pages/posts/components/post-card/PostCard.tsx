import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import { CardMedia } from '@mui/material';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';

import { IPost } from '../../interfaces/post-card';
import useAppTranslation from 'src/shared/hooks/utility/useAppTranslation';
import { DateFormats } from 'src/shared/enums/dates';
import useDateTranslate from 'src/shared/hooks/utility/useDateInterpolation';
import PostCardDescription from '../post-card-description/PostCardDescription';
import { mapNameInitials } from 'src/shared/utility/helpers';

interface Props {
  post: IPost;
}

export default function PostCard({ post }: Props) {
  const [t] = useAppTranslation();

  const { translateDate } = useDateTranslate();

  return (
    <Card sx={{ width: 345 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: 'red' }} aria-label="user-avatar">
            {mapNameInitials(post.userFullName)}
          </Avatar>
        }
        title={post.userFullName}
        subheader={translateDate(
          'date-formatter',
          new Date(post.createdAt),
          DateFormats.LONG
        )}
      />
      <CardContent>
        <PostCardDescription description={post.description} />
      </CardContent>
      {post.postImage && (
        <CardMedia
          component="img"
          height="194"
          image={post.postImage}
          alt={`${post.userFullName}'s post image.`}
        />
      )}
    </Card>
  );
}
