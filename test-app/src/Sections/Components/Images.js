import React, { useState, useEffect } from 'react';
import jsonData from './../../Data/json/images.json';

const Images = () => {
  const [imageNames, setImageNames] = useState([]);

  //useEffect empty array causes this to load on page load
  useEffect(() => {
    setImageNames(jsonData.images)
  }, []); // Empty dependency array for one-time setup

  return (
    <div className="imageGallery">
        {imageNames.map((imageName, index) => (
            <div className="image-container">
                { <img
                key={index}
                src={"./images/"+imageName.filePath} // Update the path to your actual images folder
                alt={imageName.alt}
                width="100%"
                className="imageTest"
                /> }
            </div>
        ))}
    </div>
  );
};

export default Images;
