/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import "./userLife.css";

function UserLife({ userLives }) {
  const [highlight, setHighlight] = useState(false);

  useEffect(() => {
    setHighlight(true);
    const timer = setTimeout(() => setHighlight(false), 700);
    return () => clearTimeout(timer);
  }, [userLives]);

  const counterClass = `user-life__counter ${
    highlight ? "user-life__counter--highlight" : ""
  }`;

  return (
    <h3 className="user-life">
      Lives:{" "}
      <span className={counterClass}>{userLives > 0 ? userLives : "❌"}</span>
    </h3>
  );
}

export default UserLife;
