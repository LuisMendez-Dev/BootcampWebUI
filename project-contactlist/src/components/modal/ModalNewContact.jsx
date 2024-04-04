import './modalNewContact.css';
import crossIcon from '../../assets/icons/cross-dark.svg';
import { useEffect, useRef, useState } from 'react';
import { validateFormOnSubmit } from '../../utils/formValidations';
import { useDispatch } from 'react-redux';
import { addToContacts, addToFavoritesModal } from '../../redux/contactsSlice';

function ModalNewContact({ openModal, closeModal }) {
  const dispatch = useDispatch();
  const modalRef = useRef();
  const [form, setForm] = useState({
    first_name: '',
    last_name: '',
    email: '',
    isFavorite: false,
  });
  const [errors, setErrors] = useState({});
  const [isSubmited, setIsSubmited] = useState(false);

  useEffect(() => {
    if (openModal) {
      modalRef.current?.focus();
    }
  }, [openModal]);

  useEffect(() => {
    if (isSubmited) {
      const timer = setTimeout(() => {
        setIsSubmited(false);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [isSubmited, closeModal]);

  if (!openModal) {
    return null;
  }

  const handleKeyDown = (event) => {
    if (event.key === 'Escape') {
      closeModal();
    }
  };

  const resetForm = () => {
    setForm({
      first_name: '',
      last_name: '',
      email: '',
      isFavorite: false,
    });
    setErrors({});
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const { first_name, last_name, email, isFavorite } = form;
    const { errors, isValid } = validateFormOnSubmit({
      firstName: first_name,
      lastName: last_name,
      email,
    });

    setErrors(errors);

    if (isValid) {
      try {
        if (isFavorite) {
          dispatch(addToFavoritesModal({ first_name, last_name, email }));
        } else {
          dispatch(addToContacts({ first_name, last_name, email, isFavorite }));
        }
        setIsSubmited(true);
        resetForm();
      } catch (error) {
        throw new Error(error);
      }
    }
  };

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    setForm((prevForm) => ({
      ...prevForm,
      [name]: type === 'checkbox' ? checked : value,
    }));
    if (errors[name]) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        [name]: null,
      }));
    }
  };

  const handleClose = () => {
    resetForm();
    closeModal();
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
            <button
              className="modal__close-button"
              onClick={handleClose}
              aria-label="Close new contact modal"
            >
              <img src={crossIcon} alt="Close" className="modal__close-icon" />
            </button>
          </div>
          <form onSubmit={handleSubmit} className="modal__form">
            <input
              type="text"
              id="contactFirstName"
              name="first_name"
              className="modal__input"
              value={form.first_name}
              onChange={handleChange}
              placeholder="First name"
              autoComplete="off"
            />
            {errors?.firstName && (
              <p className="modal__error-message">{errors.firstName}</p>
            )}

            <input
              type="text"
              id="contactLastName"
              name="last_name"
              className="modal__input"
              value={form.last_name}
              onChange={handleChange}
              placeholder="Last name"
              autoComplete="off"
            />
            {errors?.lastName && (
              <p className="modal__error-message">{errors.lastName}</p>
            )}

            <input
              type="email"
              id="contactEmail"
              name="email"
              className="modal__input"
              value={form.email}
              onChange={handleChange}
              placeholder="Email"
              autoComplete="off"
            />
            {errors?.email && (
              <p className="modal__error-message">{errors.email}</p>
            )}

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
                name="isFavorite"
                className="modal__checkbox"
                onChange={handleChange}
                checked={form.isFavorite}
              />
            </div>

            <div className="modal__submit-container">
              <button
                type="submit"
                className="modal__submit-button"
                disabled={!form.first_name && !form.last_name && !form.email}
              >
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
