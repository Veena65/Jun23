import React, { useState } from 'react';

function ImageUploader() {
  const [imageData, setImageData] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];

    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const imageDataUrl = e.target.result;
        setImageData(imageDataUrl);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div>
      <input type="file" accept="image/*" onChange={handleFileChange} />
      {imageData && <img src={imageData} alt="Selected Image" />}
    </div>
  );
}

export default ImageUploader;
