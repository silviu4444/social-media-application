import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

let previousRouteIndex = 1;
const usePageTransitionClass = () => {
  const { pathname } = useLocation();
  const currentRouteIndex = pathname.split('/').length - 1;
  const [cssTransitionClass, setCssTransitionClass] = useState('slide-page-in');
  useEffect(() => {
    previousRouteIndex < currentRouteIndex
      ? setCssTransitionClass('slide-page-out')
      : setCssTransitionClass('slide-page-in');
    previousRouteIndex = currentRouteIndex;
  }, [pathname]);
  return cssTransitionClass;
};

export default usePageTransitionClass;
