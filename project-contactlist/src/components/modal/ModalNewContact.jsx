/* eslint-disable react/prop-types */
import './modalNewContact.css';
import crossIcon from '../../assets/icons/cross.svg';
import { useEffect, useRef } from 'react';

function ModalNewContact({ openModal, closeModal }) {
  const modalRef = useRef();

  useEffect(() => {
    if (openModal) {
      modalRef.current?.focus();
    }
  }, [openModal]);

  if (!openModal) {
    return null;
  }

  const handleClose = () => {
    closeModal();
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Escape') {
      closeModal();
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // !TODO: Add new contact to the list
  };

  return (
    <section className="modal__background">
      <div
        className="modal"
        role="dialog"
        aria-labelledby="modalTitle"
        aria-modal="true"
        tabIndex="-1"
        onKeyDown={handleKeyDown}
        ref={modalRef}
      >
        <div className="modal__content">
          <div className="modal__header">
            <h2 id="modalTitle" className="modal__title">
              Add a Contact
            </h2>
            <button
              className="modal__close-button"
              onClick={handleClose}
              aria-label="Close new contact modal"
            >
              <img src={crossIcon} alt="Close" className="modal__close-icon" />
            </button>
          </div>
          <form onSubmit={handleSubmit} className="modal__form">
            {/* TODO: Change inputs -> Component */}
            <input
              type="text"
              id="contactFirstName"
              name="firstname"
              className="modal__input"
              placeholder="First name"
              autoComplete="off"
              required
            />

            <input
              type="text"
              id="contactLastName"
              name="lastname"
              className="modal__input"
              placeholder="Last name"
              autoComplete="off"
              required
            />

            <input
              type="email"
              id="contactEmail"
              name="email"
              className="modal__input"
              placeholder="Email"
              autoComplete="off"
              required
            />

            <div className="modal__checkbox-group">
              <label
                htmlFor="favoriteContact"
                className="modal__checkbox-label"
              >
                Enable like favorite
              </label>

              <input
                type="checkbox"
                id="favoriteContact"
                name="favorite"
                className="modal__checkbox"
              />
            </div>

            <div className="modal__submit-container">
              <button type="submit" className="modal__submit-button">
                Save
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default ModalNewContact;
