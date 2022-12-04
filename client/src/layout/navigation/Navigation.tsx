import { HomeOutlined, Person2Outlined, Add } from '@mui/icons-material';
import { Box, List, ListItem } from '@mui/material';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

import { RouterLinks } from 'src/shared/constants/routes/routes';
import { UIThemeModeState } from 'src/store/UI/ui.selectors';

const Navigation = () => {
  const routes = [
    { route: RouterLinks.HOME, IconComponent: HomeOutlined },
    { route: RouterLinks.PROFILE, IconComponent: Person2Outlined }
  ];

  const themeMode = useSelector(UIThemeModeState);

  const setActiveLinkStyle = ({ isActive }) => {
    if (isActive) {
      return themeMode === 'dark' ? { color: '#f1f1f1' } : { color: '#262626' };
    }
    return undefined;
  };

  return (
    <Box
      component="nav"
      className="fixed w-full bottom-0 left-0 right-0 h-12 border-t-2 app-navigation"
    >
      <List className="flex justify-around items-center h-full">
        {routes.map(({ route, IconComponent }) => (
          <ListItem key={route} style={{ width: 'auto' }}>
            <NavLink to={route} style={setActiveLinkStyle}>
              <IconComponent fontSize="large" />
            </NavLink>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default Navigation;
