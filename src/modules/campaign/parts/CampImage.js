import React from 'react';
import { IMAGE_EXPERIMENT } from '../../../constants/const';

const CampImage = ({className = "", image = IMAGE_EXPERIMENT}) => {
    return (
        <div className={className}>
        <img
          src={image}
          alt=""
          className="object-cover w-full h-full rounded-2xl"
        />
      </div>
    );
};

export default CampImage;