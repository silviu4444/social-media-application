import { logout } from 'src/pages/user/store/user.actions';
import { useAppDispatch } from 'src/store';

const HomePage = () => {
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

export default HomePage;
