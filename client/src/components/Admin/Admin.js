import React, { useState } from "react";
import "./Admin.css";

import Image1 from "../../images/cookie-one.jpg";
import Image2 from "../../images/cookie-two.jpg";
import Image3 from "../../images/cookie-three.jpg";
import Image4 from "../../images/rock.jpg";

export default function Admin() {
  const [count, setCount] = useState(0);

  const myArr = [Image1, Image2, Image3, Image4];

  function handleCaraUp() {
    if (count <= 2) {
      setCount(count + 1);
    } else if (count === 3) {
      setCount(0);
    }
  }

  function handleCaraDown() {
    if (count === 0) {
      setCount(3);
    } else if (count >= 1) {
      setCount(count - 1);
    }
  }

  return (
    <main className="admin-main">
      <div className="container cara-container">
        <img className="cara-img" src={myArr[count]} alt="cookie" />
        <button className="caraUpBtn" onClick={handleCaraDown}>
          &#60;
        </button>
        <button className="caraDownBtn" onClick={handleCaraUp}>
          &#62;
        </button>
      </div>
    </main>
  );
}
