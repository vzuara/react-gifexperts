import React from "react";

export const GifGridItem = ({ url, alt, title }) => {
  return (
    <div className="card animate__animated animate__fadeIn">
      <img src={url} alt={alt} />
      <p>{title}</p>
    </div>
  );
};
