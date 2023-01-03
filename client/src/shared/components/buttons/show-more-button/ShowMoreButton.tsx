import { useState } from 'react';

import { Collapse } from '@mui/material';
import CardContent from '@mui/material/CardContent';
import useAppTranslation from 'src/shared/hooks/utility/useAppTranslation';
import { SHOW_MORE_POST_DESCRIPTION_LENGTH } from 'src/shared/constants/common/common-values';

interface Props {
  text: string;
}

const ShowMoreButton = ({ text }: Props) => {
  const [t] = useAppTranslation();

  const [expanded, setExpanded] = useState(false);
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const showButton = (key: string) => (
    <span onClick={handleExpandClick} className="text-blue-600 inline cursor-pointer">
      {t(key).toLowerCase()}
    </span>
  );

  return (
    <>
      {!expanded && (
        <>
          {text.slice(0, SHOW_MORE_POST_DESCRIPTION_LENGTH + 1)}...{' '}
          {showButton('show-more')}
        </>
      )}
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          {text} {showButton('show-less')}
        </CardContent>
      </Collapse>
    </>
  );
};

export default ShowMoreButton;
