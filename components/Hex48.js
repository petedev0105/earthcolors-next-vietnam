/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React from "react";

const Hex48 = ({ img, onClick, className, frameSource }) => {
  return (
    <div className="hexb">
      <div className="hex1">
        <div className="hex48">
          <div
            className=""
            style={{
              backgroundImage: `url(${img})`,
            }}
          ></div>
          <img
            src={frameSource}
            className={className}
            onClick={onClick}
            style={{
              //   zIndex: 2,
              position: "absolute",
              top: 0,
              left: 0,
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Hex48;
