import { useAppDispatch } from 'src/store';
import { logout } from '../../store/user.actions';
import RecentPosts from '../recent-posts/RecentPosts';

const Profile = () => {
  const dispatch = useAppDispatch();

  const onLogout = () => {
    dispatch(logout());
  };

  return (
    <div>
      <button onClick={onLogout}>Logout</button>
      <RecentPosts />
    </div>
  );
};

export default Profile;
