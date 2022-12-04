import { Add } from '@mui/icons-material';
import { Link } from 'react-router-dom';

import { RouterLinks } from 'src/shared/constants/routes/routes';

const HomePage = () => {
  return (
    <header>
      <Link to={RouterLinks.NEW_POSTS}>
        <Add />
      </Link>
    </header>
  );
};

export default HomePage;
