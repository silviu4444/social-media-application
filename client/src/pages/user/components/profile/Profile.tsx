import { useAppDispatch } from 'src/store';
import { logout } from '../../store/user.actions';

const Profile = () => {
  const dispatch = useAppDispatch();

  const onLogout = () => {
    dispatch(logout());
  };
  return (
    <div>
      <button onClick={onLogout}>Logout</button>
    </div>
  );
};

export default Profile;
