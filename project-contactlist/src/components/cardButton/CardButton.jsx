/* eslint-disable no-console */
import heartIcon from '../../assets/icons/heart.svg';
import crossIcon from '../../assets/icons/cross.svg';
import trashIcon from '../../assets/icons/trash-can.svg';
import editIcon from '../../assets/icons/edit.svg';
import './cadButton.css';
import { useDispatch } from 'react-redux';
import {
  addToFavorites,
  deleteContact,
  removeFromFavorites,
} from '../../redux/contactsSlice';

const buttonStatus = {
  addFavorite: {
    className: 'card__button card__button-favorite',
    src: heartIcon,
    alt: 'Add to favorites icon',
    ariaLabel: 'Add to favorites',
    action: addToFavorites,
    text: '',
  },
  removeFavorite: {
    className: 'card__button card__button-remove',
    src: crossIcon,
    alt: 'Remove from favorites icon',
    ariaLabel: 'Remove from favorites',
    action: removeFromFavorites,
    text: 'REMOVE',
  },
  removeFavoriteContacts: {
    className: 'card__button card__button-remove-favorite-contacts',
    src: crossIcon,
    alt: 'Remove from favorites icon',
    ariaLabel: 'Remove from favorites in contacts list',
    action: removeFromFavorites,
    text: '',
  },
  deleteContact: {
    className: 'card__button card__button-delete',
    src: trashIcon,
    alt: 'Delete contact icon',
    ariaLabel: 'Delete contact',
    action: deleteContact,
    text: '',
  },
  editContact: {
    className: 'card__button card__button-favorite',
    src: editIcon,
    alt: 'Edit contact icon',
    ariaLabel: 'Edit contact',
    action: null,
    text: '',
  },
};

function CardButton({ type, contactId }) {
  const dispatch = useDispatch();
  const buttonConfig = buttonStatus[type] || {};

  const handleOnClick = () => {
    if (buttonConfig.action) {
      dispatch(buttonConfig.action(contactId));
    } else {
      console.error('No action defined for button type:', type);
    }
  };

  const handleEditClick = () => {
    
  };

  return (
    <button
      className={buttonConfig.className}
      aria-label={buttonConfig.ariaLabel}
      onClick={
        buttonConfig.action
          ? handleOnClick
          : type === 'editContact'
            ? handleEditClick
            : null
      }
    >
      <img
        src={buttonConfig.src}
        alt={buttonConfig.alt}
        className="card__button-icon"
      />
      {buttonConfig.text}
    </button>
  );
}

export default CardButton;
