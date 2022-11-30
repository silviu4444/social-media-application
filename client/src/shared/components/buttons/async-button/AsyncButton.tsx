import { Button } from '@mui/material';

import useAppTranslation from 'src/shared/hooks/useAppTranslation';
import LoadingSpinner from '../../loading-spinner/LoadingSpinner';

interface Props {
  textKey: string;
  isLoading?: boolean;
}

const AsyncButton = ({ textKey, isLoading }: Props) => {
  const [t] = useAppTranslation();

  return (
    <Button
      type="submit"
      variant="contained"
      size="large"
      disabled={!!isLoading}
    >
      <span style={{ visibility: isLoading ? 'hidden' : 'visible' }}>
        {t(textKey)}
      </span>
      {isLoading ? (
        <LoadingSpinner className="absolute" widthPx={30} heightPx={30} />
      ) : null}
    </Button>
  );
};

export default AsyncButton;
