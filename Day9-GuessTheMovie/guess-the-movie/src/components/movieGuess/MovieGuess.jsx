import { useState } from "react";
import "./movieGuess.css";

// eslint-disable-next-line react/prop-types
function MovieGuess({ functionValidate, resultValidate }) {
  const [movieName, setMovieName] = useState("");

  const handleChange = (event) => {
    setMovieName(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const validation = functionValidate(movieName);
    setMovieName("");
    resultValidate(validation);
  };

  return (
    <form className="movie-guess" onSubmit={handleSubmit}>
      <input
        className="movie-guess__input"
        id="movieName"
        type="text"
        value={movieName}
        onChange={handleChange}
        placeholder="Try to guess the movie name"
        autoComplete="off"
      />
      <button
        className="movie-guess__button"
        type="submit"
        disabled={!movieName}
      >
        Guess
      </button>
    </form>
  );
}

export default MovieGuess;
