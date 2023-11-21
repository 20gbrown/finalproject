// RaceImages.js
import React from 'react';

const RaceImages = ({ src, alt }) => {
  //console.log('Image Source:', src);
  return <img src={require(`../public/${src}`).default} alt={alt} />;
};

export default RaceImages;

