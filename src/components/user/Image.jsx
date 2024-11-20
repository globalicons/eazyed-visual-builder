import { useEffect, useState } from "react";
import { useNode } from "@craftjs/core";

export const Image = ({ src }) => {
    const [imageSrc, setImageSrc] = useState(src || '');  // default to empty or provided source
    const { connectors: { drag } } = useNode();
  
    const handleImageChange = (e) => {
      const file = e.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onloadend = () => {
          setImageSrc(reader.result);
        };
        reader.readAsDataURL(file);
      }
    };
  
    return (
      <div ref={drag}>
        <div>
          <input 
            type="file" 
            accept="image/*" 
            onChange={handleImageChange} 
            style={{ marginBottom: '10px' }} 
          />
        </div>
        {imageSrc && <img src={imageSrc} alt="Uploaded preview" style={{ maxWidth: '100%' }} />}
      </div>
    );
};
  
  export default Image;