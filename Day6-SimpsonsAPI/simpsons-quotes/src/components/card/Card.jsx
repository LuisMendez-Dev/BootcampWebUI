/* eslint-disable react/prop-types */
import "./card.css";

function Card({ quote, characterName, characterImage }) {
  return (
    <section className="card">
      <div className="card__content">
        <p className="card__quote">{quote}</p>
        <img
          src={characterImage}
          alt={`Image of ${characterName}`}
          className="card__image"
        />
      </div>
      <p className="card__character-name">{characterName}</p>
    </section>
  );
}

export default Card;
