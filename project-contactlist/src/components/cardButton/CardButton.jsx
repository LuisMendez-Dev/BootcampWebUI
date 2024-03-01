/* eslint-disable react/prop-types */
import './cadButton.css';
import heartIcon from '../../assets/icons/heart.svg';
import crossIcon from '../../assets/icons/cross.svg';
import trashIcon from '../../assets/icons/trash-can.svg';

const selectClass = (type) => {
  switch (type) {
    case 'addFavorite':
      return 'card__button card__button-favorite';
    case 'removeFavorite':
      return 'card__button card__button-delete';
    case 'deleteContact':
      return 'card__button card__button-close';
    default:
      return 'card__button';
  }
};

const selectSrc = (type) => {
  switch (type) {
    case 'addFavorite':
      return heartIcon;
    case 'removeFavorite':
      return trashIcon;
    case 'deleteContact':
      return crossIcon;
    default:
      return '';
  }
};

function CardButton({ type, onClick }) {
  return (
    <button
      className={selectClass(type)}
      aria-label="Button with action over cards"
    >
      <img src={selectSrc(type)} alt={type} className="card__button-icon" />
    </button>
  );
}

export default CardButton;
