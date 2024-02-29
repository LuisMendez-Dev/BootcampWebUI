import { useEffect, useState } from "react";
import "./userScore.css";

// eslint-disable-next-line react/prop-types
function UserScore({ userScore }) {
  const [highlight, setHighlight] = useState(false);

  useEffect(() => {
    setHighlight(true);
    const timer = setTimeout(() => setHighlight(false), 700);
    return () => clearTimeout(timer);
  }, [userScore]);

  const counterClass = `user-score__counter ${
    highlight ? "user-score__counter--highlight" : ""
  }`;

  return (
    <h3 className="user-score">
      Score: <span className={counterClass}>{userScore}</span>
    </h3>
  );
}

export default UserScore;
