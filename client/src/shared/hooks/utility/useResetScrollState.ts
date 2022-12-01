import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { RouterLinks } from 'src/shared/constants/routes/routes';
import { useAppDispatch } from 'src/store';
import { UIActions } from 'src/store/UI/ui';

const useResetScrollState = () => {
  const dispatch = useAppDispatch();
  const { pathname } = useLocation();
  useEffect(() => {
    const currentRootURL = ('/' + pathname.split('/')[1]) as RouterLinks;
    // dispatch(UIActions.handleScrollStateWhileNavigatingThroughPages({ currentUrl: currentRootURL }));
  }, [pathname]);
};

export default useResetScrollState;
