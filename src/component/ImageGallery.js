import React from 'react';

const ImageGallery = ({ imageUrls }) => {
  return (
    <div style={styles.galleryContainer}>
      {imageUrls.map((url, index) => (
        <div key={index} style={styles.imageContainer}>
          <img src={url} alt={`Gallery ${index + 1}`} style={styles.image} />
        </div>
      ))}
    </div>
  );
};

const styles = {
  galleryContainer: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
    gap: '10px',
  },
  imageContainer: {
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
};

export default ImageGallery;
