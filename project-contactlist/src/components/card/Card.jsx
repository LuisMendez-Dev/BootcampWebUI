/* eslint-disable react/prop-types */
import CardButton from '../cardButton/CardButton';
import './card.css';

const cardTypeToImageClass = {
  contactOverview: 'card__image card__image-contact',
  favorites: 'card__image card__image-favorite',
  favoriteOverview: 'card__image card__image-favorite',
  favoriteContacts: 'card__image card__image-favorite',
  default: 'card__image',
};

// TODO: change cardTypeImageClass

function Card({
  contactImage,
  contactName,
  contactEmail,
  cardType,
  buttons,
  contactId,
}) {
  const imageClass =
    cardTypeToImageClass[cardType] || cardTypeToImageClass.default;

  return (
    <article className="card">
      <div className="card__container">
        <div className="card__image-container">
          <img
            src={contactImage}
            alt={`Image of ${contactName}`}
            className={imageClass}
          />
        </div>
        <div className="card__content">
          <h3 id={`contactName-${contactId}`} className="card__name">
            {contactName}
          </h3>
          <p id={`contactEmail-${contactId}`} className="card__email">
            {contactEmail}
          </p>
        </div>
        <div
          className="card__footer"
          aria-labelledby={`contactName-${contactId}`}
          aria-describedby={`contactEmail-${contactId}`}
        >
          {buttons &&
            buttons.map((buttonType) => (
              <CardButton
                key={buttonType}
                type={buttonType}
                contactId={contactId}
              />
            ))}
        </div>
      </div>
    </article>
  );
}

export default Card;
