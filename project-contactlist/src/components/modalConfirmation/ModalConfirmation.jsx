import './ModalConfirmation.css';

const ModalConfirmation = ({ type, onConfirm, onCancel }) => {
  const confirmationMessage =
    type === 'delete'
      ? 'Are you sure you want to delete this contact?'
      : 'Are you sure you want to remove this contact from favorites?';

  return (
    <div
      className="modal"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modalTitle"
      aria-describedby="modalDescription"
    >
      <div className="modal__content">
        <h2 className="modal__title" id="modalTitle">
          Wait!
        </h2>
        <p className="modal__description" id="modalDescription">
          {confirmationMessage}
        </p>
        <div className="modal__actions">
          <button
            className="modal__button modal__button--confirm"
            onClick={onConfirm}
          >
            Yes
          </button>
          <button
            className="modal__button modal__button--cancel"
            onClick={onCancel}
          >
            No
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModalConfirmation;
