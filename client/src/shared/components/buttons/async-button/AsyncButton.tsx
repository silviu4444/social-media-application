import { Button } from '@mui/material';

import useAppTranslation from 'src/shared/hooks/utility/useAppTranslation';
import LoadingSpinner from '../../loading-spinner/LoadingSpinner';

interface Props {
  textKey: string;
  isLoading?: boolean;
  className?: string;
  disabled?: boolean;
}

const AsyncButton = ({ textKey, isLoading, className, disabled }: Props) => {
  const [t] = useAppTranslation();

  return (
    <Button
      classes={{
        root: className ? className : undefined
      }}
      type="submit"
      color="secondary"
      variant="contained"
      size="large"
      disabled={!!isLoading || disabled}
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
