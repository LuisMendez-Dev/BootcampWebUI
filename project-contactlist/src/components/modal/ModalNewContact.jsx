import './modalNewContact.css';
import crossIcon from '../../assets/icons/cross.svg';
import { useEffect, useRef, useState } from 'react';
import { validateFormOnSubmit } from '../../utils/formValidations';
import { useDispatch } from 'react-redux';
import { addToContacts } from '../../redux/contactsSlice';

function ModalNewContact({ openModal, closeModal }) {
  const dispatch = useDispatch();
  const modalRef = useRef();
  const [form, setForm] = useState({
    firstname: '',
    lastname: '',
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
      firstname: '',
      lastname: '',
      email: '',
      isFavorite: false,
    });
    setErrors({});
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const { firstname, lastname, email } = form;
    const { errors, isValid } = validateFormOnSubmit({
      firstName: firstname,
      lastName: lastname,
      email,
    });

    setErrors(errors);

    if (isValid) {
      try {
        dispatch(
          addToContacts({
            first_name: firstname,
            last_name: lastname,
            email: email,
            isFavorite: form.favorite,
          })
        );
        setIsSubmited(true);
        resetForm();
      } catch (error) {
        console.error('Error adding contact', error);
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
          {isSubmited && (
            <p className="modal__success-message">Contact added successfully</p>
          )}
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
            <input
              type="text"
              id="contactFirstName"
              name="firstname"
              className="modal__input"
              value={form.firstname}
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
              name="lastname"
              className="modal__input"
              value={form.lastname}
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
