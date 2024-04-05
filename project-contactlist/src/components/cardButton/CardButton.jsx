/* eslint-disable no-console */
import heartIcon from '../../assets/icons/heart.svg';
import crossIcon from '../../assets/icons/cross.svg';
import trashIcon from '../../assets/icons/trash-can.svg';
import editIcon from '../../assets/icons/edit.svg';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  addToFavorites,
  deleteContact,
  removeFromFavorites,
} from '../../redux/contactsSlice';
import ModalConfirmation from '../modalConfirmation/ModalConfirmation';
import './cadButton.css';

const buttonStatus = {
  addFavorite: {
    className: 'card__button card__button-favorite',
    src: heartIcon,
    alt: 'Add to favorites icon',
    ariaLabel: 'Add to favorites',
    action: addToFavorites,
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
  },
  deleteContact: {
    className: 'card__button card__button-delete',
    src: trashIcon,
    alt: 'Delete contact icon',
    ariaLabel: 'Delete contact',
    action: deleteContact,
  },
  editContact: {
    className: 'card__button card__button-favorite',
    src: editIcon,
    alt: 'Edit contact icon',
    ariaLabel: 'Edit contact',
    action: null,
  },
};

function CardButton({ type, contactId }) {
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);
  const buttonConfig = buttonStatus[type] || {};

  const handleOnClick = () => {
    if (
      type === 'deleteContact' ||
      type === 'removeFavorite' ||
      type === 'removeFavoriteContacts'
    ) {
      setShowModal(true);
    } else if (buttonConfig.action) {
      dispatch(buttonConfig.action(contactId));
    } else {
      console.error('No action defined for button type:', type);
    }
  };

  const handleConfirm = () => {
    if (buttonConfig.action) {
      dispatch(buttonConfig.action(contactId));
    }
    setShowModal(false);
  };

  const handleCancel = () => {
    setShowModal(false);
  };

  return (
    <>
      <button
        className={buttonConfig.className}
        aria-label={buttonConfig.ariaLabel}
        onClick={handleOnClick}
      >
        <img
          src={buttonConfig.src}
          alt={buttonConfig.alt}
          className="card__button-icon"
        />
        {buttonConfig.text && (
          <span className="card__button-text">{buttonConfig.text}</span>
        )}
      </button>
      {showModal && (
        <ModalConfirmation
          type={type === 'deleteContact' ? 'delete' : 'remove'}
          onConfirm={handleConfirm}
          onCancel={handleCancel}
        />
      )}
    </>
  );
}

export default CardButton;
