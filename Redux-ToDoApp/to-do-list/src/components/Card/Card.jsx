import randomColorCard from "../../utils/randomColorCard";
import crossIcon from "../../assets/icons/cross.svg";
import deleteIcon from "../../assets/icons/delete.svg";
import correctIcon from "../../assets/icons/correct.svg";
import "./card.css";

function Card({ task, handleDeleteTask, onClick, status, handleChange }) {
  return (
    <div
      className="card"
      style={{
        backgroundColor: randomColorCard(),
      }}
    >
      <div className="card__header">
        <p
          className="card__title"
          style={
            status
              ? { textDecoration: "line-through" }
              : { textDecoration: "none" }
          }
          onClick={onClick}
        >
          {task.title}
        </p>
      </div>
      <div className="card__footer">
        <button className="card__button" onClick={handleChange}>
          <img
            src={status ? crossIcon : correctIcon}
            alt="Change status icon"
            className="card__button-icon"
          />
        </button>
        <button className="card__button" onClick={handleDeleteTask}>
          <img
            src={deleteIcon}
            alt="Delete task icon"
            className="card__button-icon"
          />
        </button>
      </div>
    </div>
  );
}

export default Card;
