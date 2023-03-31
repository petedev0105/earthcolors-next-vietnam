/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React from "react";

const Hex = ({ img, onClick, className, frameSource,type }) => {
  return (
    <div className={`hexa-${type}`}>
      <div className={`hex1-${type}`}>
        <div className={`hex2-${type}`}>
          <div
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
              transform: "scale(1.02)",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Hex;
