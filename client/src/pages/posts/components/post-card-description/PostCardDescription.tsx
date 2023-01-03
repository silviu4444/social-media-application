import { Typography } from '@mui/material';
import ShowMoreButton from 'src/shared/components/buttons/show-more-button/ShowMoreButton';
import { SHOW_MORE_POST_DESCRIPTION_LENGTH } from 'src/shared/constants/common/common-values';

interface Props {
  description: string;
}

const PostCardDescription = ({ description }: Props) => {
  return (
    <Typography
      component="span"
      className="inline"
      variant="body2"
      color="text.secondary"
    >
      {description.length <= SHOW_MORE_POST_DESCRIPTION_LENGTH ? (
        description
      ) : (
        <ShowMoreButton text={description} />
      )}
    </Typography>
  );
};

export default PostCardDescription;
