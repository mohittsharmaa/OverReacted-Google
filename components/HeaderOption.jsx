import React from "react";

const HeaderOption = ({ title, icon, selected }) => {
  return (
    <div
      className={`flex items-center space-x-2 mx-3 pb-3 border-b-4 border-transparent hover:border-blue-500 hover:text-blue-500 cursor-pointer 
      ${selected && "text-blue-500 border-blue-500"}`}
    >
      <div className="h-auto">{icon}</div>
      <p className="hidden sm:inline-flex">{title}</p>
    </div>
  );
};

export default HeaderOption;
