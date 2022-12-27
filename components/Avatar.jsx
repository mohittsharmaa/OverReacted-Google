import Image from "next/image";
import React from "react";

const Avatar = ({ url, postiton }) => {
  return (
    <img
      className={`h-11 rounded-full cursor-pointer transition duration-200 transform hover:scale-110 ${postiton}`}
      loading="lazy"
      src={url}
      alt="Profile Picture"
    />
  );
};

export default Avatar;
