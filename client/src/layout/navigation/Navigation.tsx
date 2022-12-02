import { HomeOutlined, Person2Outlined } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { RouterLinks } from 'src/shared/constants/routes/routes';

const Navigation = () => {
  return (
    <div>
      <Link to={RouterLinks.HOME}>
        <HomeOutlined />
      </Link>
      <Link to={RouterLinks.PROFILE}>
        <Person2Outlined />
      </Link>
    </div>
  );
};

export default Navigation;
