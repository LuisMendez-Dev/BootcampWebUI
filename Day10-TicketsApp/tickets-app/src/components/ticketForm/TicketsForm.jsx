import ErrorMessage from "../errorMessage/ErrorMessage";
import InputForm from "../input/InputForm";
import Spinner from "../spinner/Spinner";
import SubmitMessage from "../submitMessage/SubmitMessage";

/* eslint-disable react/prop-types */
function TicketsForm({
  submitResult,
  ticketData,
  handleCloseValidation,
  handleSubmit,
  handleChange,
  isLoading,
}) {
  return (
    <div className="tickets">
      {submitResult && (
        <SubmitMessage
          submitResult={submitResult}
          handleCloseValidation={handleCloseValidation}
        />
      )}
      <h1 className="tickets__title">Add Ticket</h1>
      <form className="tickets__form" onSubmit={handleSubmit}>
        <div className="tickets__form-group">
          <label htmlFor="ticketTitle" className="tickets__label">
            Title
          </label>
          <InputForm
            goal={"text"}
            type={"text"}
            name={"title"}
            id={"ticketTitle"}
            className={"tickets__input tickets__input--title"}
            value={ticketData.title}
            onChange={handleChange}
            disabled={isLoading}
            placeholder={"Add the ticket title"}
          />
          {ticketData.errors?.title && (
            <ErrorMessage>{ticketData.errors.title}</ErrorMessage>
          )}
        </div>

        <div className="tickets__form-group">
          <label htmlFor="ticketPriority" className="tickets__label">
            Priority
          </label>
          <InputForm
            goal={"select"}
            name={"priority"}
            id={"ticketPriority"}
            className={"tickets__input tickets__select"}
            value={ticketData.priority}
            onChange={handleChange}
            disabled={isLoading}
          />
          {ticketData.errors?.priority && (
            <ErrorMessage>{ticketData.errors.priority}</ErrorMessage>
          )}
        </div>

        <div className="tickets__form-group">
          <label htmlFor="ticketDescription" className="tickets__label">
            Description
          </label>
          <InputForm
            goal={"textarea"}
            name={"description"}
            id={"ticketDescription"}
            rows="10"
            cols="20"
            className={"tickets__input tickets__textarea"}
            value={ticketData.description}
            onChange={handleChange}
            disabled={isLoading}
            placeholder={"Add the ticket description"}
          />
          {ticketData.errors?.description && (
            <ErrorMessage>{ticketData.errors.description}</ErrorMessage>
          )}
        </div>
        <div className="tickets__form-check">
          <label
            htmlFor="ticketResolved"
            className="tickets__label tickets__label--checkbox"
          >
            Mark as resolved
          </label>
          <input
            type="checkbox"
            name="resolved"
            id="ticketResolved"
            className="tickets__checkbox"
            checked={ticketData.resolved}
            onChange={handleChange}
            disabled={isLoading}
          />
        </div>
        {isLoading ? (
          <Spinner />
        ) : (
          <button
            type="submit"
            className="tickets__submit-btn"
            disabled={isLoading}
          >
            Submit
          </button>
        )}
      </form>
    </div>
  );
}

export default TicketsForm;
