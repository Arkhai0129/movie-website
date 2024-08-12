import React, { useState } from "react";
import "./Star.css";

const RatingStar = () => {
  const numbers = [1, 2, 3, 4, 5];
  const [unelgee, setUnelgee] = useState();

  return (
    <div>
      {numbers.map((number) => (
        <span
          className={unelgee >= number ? "gold" : "gray"}
          onClick={() => {
            setUnelgee(number);
          }}
        >
          ★
        </span>
      ))}
    </div>
  );
};

export default RatingStar;
