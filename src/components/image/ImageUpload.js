import axios from "axios";
import React from "react";
import { toast } from "react-toastify";
import { imgbbAPI } from "../../config/pathConfig";

const ImageUpload = ({ onChange = () => {}, name }) => {
  const handleUploadImage = async (e) => {
    const file = e.target.files[0];
    const bodyFormData = new FormData();
    bodyFormData.append("image", file);
    const response = await axios.request({
      method: "POST",
      url: imgbbAPI,
      data: bodyFormData,
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    const dataImage = response?.data?.data;

    if (!dataImage) {
      toast.error("Can not upload image to imgbbAPI");
    }
    const imgObj = {
      medium: dataImage.medium.url,
      thumb: dataImage.thumb.url,
      url: dataImage.url,
    };
    onChange(name, imgObj);
  };
  return (
    <label className="w-full h-[200px] border border-gray-200 border-dashed rounded-xl cursor-pointer flex items-center justify-center">
      <input type="file" onChange={handleUploadImage} className="hidden" />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-6 h-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"
        />
      </svg>
    </label>
  );
};

export default ImageUpload;
