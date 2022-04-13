import React from "react";
import "animate.css";

export const GifGridItem = ({ img: { title, url } }) => {
  return (
    <div className="card animate__animated animate__fadeIn">
      <p>{title}</p>
      <img src={url} alt={title} />
    </div>
  );
};
