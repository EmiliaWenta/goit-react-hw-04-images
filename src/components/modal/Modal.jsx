import React, { useEffect } from 'react';
import css from './Modal.module.css';

import { useImage } from '../../hooks/ImageContext';

export default function Modal() {
  const {
    largeImage,
    largeImageAlt,
    handleCloseModalESC,
    handleCloseModalClick,
  } = useImage();

  useEffect(() => {
    document.addEventListener('keydown', handleCloseModalESC);
    document.addEventListener('click', handleCloseModalClick);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    return () => {
      document.removeEventListener('keydown', handleCloseModalESC);
      document.removeEventListener('click', handleCloseModalClick);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div id="close" className={css.overlay}>
      <div className={css.modal}>
        <img src={largeImage} alt={largeImageAlt} />
      </div>
    </div>
  );
}
