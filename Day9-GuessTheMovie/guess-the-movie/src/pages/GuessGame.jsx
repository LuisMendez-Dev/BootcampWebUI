import { useEffect, useState } from "react";
import MovieTitle from "../components/movieTitle/MovieTitle";
import moviesData from "../utils/moviesData.js";
import randomDataValue from "../utils/randomDataValue.js";
import MovieGuess from "../components/movieGuess/MovieGuess.jsx";
import UserLife from "../components/life/UserLife.jsx";
import UserScore from "../components/score/UserScore.jsx";
import "./guessGame.css";

function GuessGame() {
  const [movie, setMovie] = useState(null);
  const [score, setScore] = useState(0);
  const [lives, setLives] = useState(3);
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState("");

  useEffect(() => {
    setMovie(randomDataValue(moviesData));
  }, []);

  useEffect(() => {
    lives === 0 && setMessage("Game Over!") && setMessageType("wrong");
  }, [lives]);

  const handleRestart = () => {
    setScore(0);
    setLives(3);
    setMessage("");
    setMovie(randomDataValue(moviesData));
  };

  const validate = (movieName) => {
    return movieName.toLowerCase() === movie.name.toLowerCase();
  };

  const handleValidationResult = (isValid) => {
    if (isValid) {
      setScore((prevScore) => prevScore + 1);
      setMessage("Correct! +1.");
      setMessageType("correct");
    } else {
      setLives((prevLives) => prevLives - 1);
      setMessage("Wrong guess. -1.");
      setMessageType("wrong");
    }
    setMovie(randomDataValue(moviesData));
  };

  return (
    <section className="guess-game">
      <header className="guess-game__header">
        <UserLife userLives={lives} />
        <UserScore userScore={score} />
      </header>
      <main className="guess-game__main">
        <div className="guess-game__information">
          <h2 className="guess-game__title">Guess the movie</h2>
          <h4 className="guess-game__author">Made by Luis Mendez</h4>
        </div>

        {lives > 0 && (
          <MovieTitle
            emojis={movie?.emoji}
            className="guess-game__movie-title"
          />
        )}

        {lives > 0 ? (
          <MovieGuess
            functionValidate={validate}
            resultValidate={handleValidationResult}
            className="guess-game__movie-guess"
          />
        ) : (
          <div className="guess-game__game-over">
            <button
              className="guess-game__restart-button"
              onClick={handleRestart}
            >
              Restart Game
            </button>
          </div>
        )}
        {message && (
          <p
            className={`${
              messageType === "wrong"
                ? "guess-game__message--wrong"
                : "guess-game__message--correct"
            } guess-game__message`}
          >
            {message}
          </p>
        )}
      </main>
    </section>
  );
}

export default GuessGame;
