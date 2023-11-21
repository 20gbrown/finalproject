// ClassImages.js

import React from 'react';
//import './style.css';

const ClassImages = ({ src, alt }) => {
  return (
    <div className="class-images-container">
      <img className="class-image" src={require(`../public/${src}`).default} alt={alt} />
    </div>
  );
};

export default ClassImages;
