/* eslint-disable react/prop-types */
import CardButton from '../cardButton/CardButton';
import './card.css';

function Card({ contactImage, contactName, contactEmail }) {
  return (
    <article
      className="card"
      aria-labelledby="contactName"
      aria-describedby="contactEmail"
    >
      <div className="card__image-container">
        <img
          src={contactImage}
          alt={`Image of ${contactName}`}
          className="card__image"
        />
      </div>
      <div className="card__content">
        <h3 id="contactName" className="card__name">
          {contactName}
        </h3>
        <p id="contactEmail" className="card__email">
          {contactEmail}
        </p>
      </div>
      <div className="card__footer">
        <CardButton
          type="addFavorite"
          aria-label={`Add ${contactName} to favorites`}
        />
      </div>
    </article>
  );
}

export default Card;
