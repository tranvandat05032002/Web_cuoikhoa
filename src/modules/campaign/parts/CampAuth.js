import React from 'react';
import { IMAGE_EXPERIMENT } from '../../../constants/const';

const CampAuth = ({author = "Mahfuzul Nabil", image = IMAGE_EXPERIMENT}) => {
    return (
        <div className="flex items-center gap-x-3">
      <img
        src={image}
        className="object-cover w-8 h-8 rounded-full"
        alt=""
      ></img>
      <p className="text-xs text-text3">
        By <span className="font-semibold text-text2">{author}</span>
      </p>
    </div>
    );
};

export default CampAuth;