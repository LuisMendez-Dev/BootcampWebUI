import "./movieTitle.css";

// eslint-disable-next-line react/prop-types
function MovieTitle({ emojis }) {
  return <h1 className="movie-title">{emojis}</h1>;
}

export default MovieTitle;
