/* eslint-disable react/prop-types */

import crossIcon from "../../assets/images/cross-icon.svg";
import { ERROR_BACKGROUND, SUCCESS_BACKGROUND } from "../../utils/constants";

const validationSubmitMessage = (submitResult) => {
  switch (submitResult) {
    case "success":
      return "Ticket added successfully";
    case "fail":
      return "Failed to add ticket";
    case "error":
      return "Please fill the form correctly!";
    case "deletedSuccesfully":
      return "Ticket deleted successfully";
    case "deletedFail":
      return "Failed to delete ticket";
    default:
      return "";
  }
};

const backgroundColorMessage = (submitResult) => {
  switch (submitResult) {
    case "success":
    case "deletedSuccesfully":
      return SUCCESS_BACKGROUND;
    case "fail":
    case "error":
      return ERROR_BACKGROUND;
    default:
      return "";
  }
};

function SubmitMessage({ submitResult, handleCloseValidation }) {
  return (
    <div
      className="tickets__validation"
      style={{
        backgroundColor: backgroundColorMessage(submitResult),
      }}
    >
      <h2 className="tickets__validation-message">
        {validationSubmitMessage(submitResult)}
      </h2>
      <button
        className="tickets__validation-btn"
        onClick={handleCloseValidation}
      >
        <img
          src={crossIcon}
          alt="Cross icon"
          className="ticket__validation-Icon"
        />
      </button>
    </div>
  );
}

export default SubmitMessage;
