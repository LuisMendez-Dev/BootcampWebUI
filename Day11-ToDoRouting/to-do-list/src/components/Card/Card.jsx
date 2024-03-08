import randomColorCard from "../../utils/randomColorCard";
import crossIcon from "../../assets/icons/cross.svg";
import "./card.css";

function Card({ task, handleDeleteTask, onClick }) {
  return (
    <div
      className="card"
      style={{
        backgroundColor: randomColorCard(),
      }}
      onClick={onClick}
    >
      <div className="card__header">
        <p className="card__title">{task.title}</p>
      </div>
      <div className="card__footer">
        <button className="card__button" onClick={handleDeleteTask}>
          <img
            src={crossIcon}
            alt="Delete task icon"
            className="card__button-icon"
          />
        </button>
      </div>
    </div>
  );
}

export default Card;
