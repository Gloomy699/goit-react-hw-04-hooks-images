import React from 'react';
import PropTypes from 'prop-types';
import s from './ImageGalleryItem.module.css';

const ImageGalleryItem = ({ image, toggleModal }) => {
  const onClick = () => {
    toggleModal({
      status: true,
      src: image.largeImageURL,
      alt: image.tags,
    });
  };

  return (
    <li className={s.ImageGalleryItem}>
      <img
        className={s.image}
        src={image.webformatURL}
        alt={image.tags}
        onClick={onClick}
      />
    </li>
  );
};

ImageGalleryItem.propTypes = {
  image: PropTypes.object.isRequired,
  toggleModal: PropTypes.func.isRequired,
};

export default ImageGalleryItem;
