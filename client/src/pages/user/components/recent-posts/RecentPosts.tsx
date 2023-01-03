import { Typography } from '@mui/material';
import { useQuery } from '@tanstack/react-query';

import PostCard from 'src/pages/posts/components/post-card/PostCard';
import { DtoPostsCardData } from 'src/pages/posts/interfaces/post-card';
import CustomSkeleton from 'src/shared/components/custom-skeleton/CustomSkeleton';
import useAppTranslation from 'src/shared/hooks/utility/useAppTranslation';
import { getAllPosts } from '../../fetchers/profile';
import styles from './RecentPosts.module.scss';

const RecentPosts = () => {
  const [t] = useAppTranslation();

  const { data, isLoading, isSuccess } = useQuery<{}, {}, DtoPostsCardData>({
    queryKey: ['user-recent-posts'],
    queryFn: getAllPosts
  });

  return (
    <>
      <Typography variant="h5" color="secondary">
        {t('your-recent-posts')}
      </Typography>
      <div
        className={`${styles['posts-container']} grid justify-items-center items-center grid-cols-1`}
      >
        <>
          {isSuccess &&
            data.posts.map((post) => <PostCard key={post._id} post={post} />)}
          {isLoading && (
            <>
              <CustomSkeleton />
              <CustomSkeleton />
            </>
          )}
        </>
      </div>
    </>
  );
};

export default RecentPosts;
