import { Box, Divider } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { ChangeEvent, useState } from 'react';

import { MAX_IMAGE_SIZE } from 'src/shared/constants/common/common-values';
import useAppTranslation from 'src/shared/hooks/utility/useAppTranslation';
import { base64ToMb } from 'src/shared/utility/helpers';
import CustomFileInput from '../inputs/custom-file-input/CustomFileInput';

interface Props {
  onUpload: (base64Img: string) => void;
  base64Source: string;
  className?: string;
}

const ImageUploader = ({ onUpload, base64Source, className }: Props) => {
  const [error, setError] = useState('');

  const [t] = useAppTranslation();

  const previewFile = (file: File) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      if (base64ToMb(reader.result as string) > MAX_IMAGE_SIZE) {
        onUpload(null);
        setError(
          t('the-image-is-too-big-max-size-allowed-mb', {
            number: MAX_IMAGE_SIZE
          })
        );
        return;
      } else {
        setError('');
      }
      onUpload(reader.result as string);
    };
  };

  const handleFileInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files[0];
    if (file) {
      previewFile(file);
    }
  };

  return (
    <Box component="div" className={className ? className : undefined}>
      {!base64Source ? (
        <CustomFileInput
          labelKey="upload-image"
          onChange={handleFileInputChange}
        />
      ) : null}
      <div>
        {base64Source && (
          <div className="relative p-7 w-auto">
            <CloseIcon
              className="absolute top-0 right-0 cursor-pointer"
              onClick={() => onUpload(null)}
            />
            <img src={base64Source} />
          </div>
        )}
        {error ? (
          <p className="text-red-400">{error}</p>
        ) : (
          !base64Source && (
            <p>
              {t('maximum-mb', {
                number: MAX_IMAGE_SIZE
              })}
            </p>
          )
        )}
      </div>
    </Box>
  );
};

export default ImageUploader;
