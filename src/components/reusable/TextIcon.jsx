import React from "react";

const TextIcon = ({ className, text, icon }) => {
  return (
    <div>
      <div className="img">
        <div className="img-content flex items-center gap-x-3">
          <img
            src={icon}
            alt=""
            className={`max-w-[50px] max-h-[50px] ${className}`}
          />
          <p className="text-[28px] font-generalSb">{text}</p>
        </div>
      </div>
    </div>
  );
};

export default TextIcon;
