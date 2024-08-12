import React, { useState } from "react";
import RatingStar from "./RatingStar";

export const Movies = ({ imgUrl, name, description }) => {
  const [count, setCount] = useState(0);
  return (
    <div className="movie-container">
      <img src={imgUrl} alt="" />
      <div className="movie-description">
        <h4>{name}</h4>
        <p>{description}</p>
      </div>
      <RatingStar />
      <div className="buttons">
        <h3>Таалагдсан: {count}</h3>
        <button className="likeButton" onClick={() => setCount(count + 1)}>
          Таалагдсан
        </button>
        <button className="dislikeButton" onClick={() => setCount(count - 1)}>
          Таалагдаагүй
        </button>
        <button className="resetButton" onClick={() => setCount(count - count)}>
          Шинээр эхлэх
        </button>
      </div>
    </div>
  );
};
