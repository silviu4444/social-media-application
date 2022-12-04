import { ChangeEvent } from 'react';

import styles from './CustomFileInput.module.scss';
import useAppTranslation from 'src/shared/hooks/utility/useAppTranslation';

interface Props {
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  className?: string;
  labelKey?: string;
}

const CustomFileInput = ({
  onChange,
  className,
  labelKey='upload-file'
}: Props) => {
  const [t] = useAppTranslation();
  return (
    <div className={`${styles['file-input']} ${className ? className : ''}`}>
      <input
        onChange={onChange}
        type="file"
        name="file-input"
        id="file-input"
        className={styles['file-input__input']}
      />
      <label className={styles['file-input__label']} htmlFor="file-input">
        <span>{t(labelKey)}</span>
      </label>
    </div>
  );
};

export default CustomFileInput;
