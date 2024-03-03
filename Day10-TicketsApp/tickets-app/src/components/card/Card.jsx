/* eslint-disable react/prop-types */
import { useState } from "react";
import useApi from "../../hooks/useJsonServer";
import { BASE_URL } from "../../utils/constants";
import Spinner from "../spinner/Spinner";
import "./card.css";

function Card({
  id,
  title,
  priority,
  description,
  resolved,
  fetch,
  messageDelete,
}) {
  const { sendRequest, isLoading } = useApi();
  const [errorMessage, setErrorMessage] = useState(null);

  const handleDelete = async () => {
    try {
      const response = await sendRequest({
        url: `${BASE_URL}/${id}`,
        method: "delete",
      });
      if (response.status === 200) {
        messageDelete("deletedSuccesfully");
        fetch();
      } else {
        messageDelete("deletedFail");
        setErrorMessage("Error deleting ticket");
      }
    } catch (err) {
      setErrorMessage(err.message);
    }
  };

  return (
    <div className="card">
      <div className="card__header">
        <h3
          style={{
            textDecoration: resolved ? "line-through" : "none",
          }}
          className="card__title"
        >
          {title}
        </h3>
        {errorMessage && <span className="card__error">{errorMessage}</span>}
        {resolved ? (
          <span className="card__resolved">Resolved</span>
        ) : (
          <span className="card__unresolved">Unresolved</span>
        )}
      </div>
      <div className="card__content">
        <p>{description}</p>
      </div>
      <div className="card__footer">
        <span className="card__priority">P{priority}</span>
        <button onClick={handleDelete} className="card__button">
          {isLoading ? <Spinner /> : "Delete"}
        </button>
      </div>
    </div>
  );
}

export default Card;
