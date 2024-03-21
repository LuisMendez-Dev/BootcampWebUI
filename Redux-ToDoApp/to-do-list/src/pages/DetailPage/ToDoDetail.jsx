import { useEffect, useState } from "react";
import Container from "../../components/container/Container";
import { useParams, useNavigate } from "react-router-dom";
import "./todoDetail.css";
import { useSelector } from "react-redux";

function ToDoDetail() {
  const task = useSelector((state) => state.todos.allTodos);
  const [taskData, setTaskData] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const taskById = task.find((task) => task.id === id);
    if (taskById) {
      setTaskData({
        title: taskById.title,
        description: taskById.description,
        creationDate: taskById.creationDate,
      });
    } else {
      navigate("/list");
    }
  }, [id, navigate]);

  if (!taskData) {
    return null;
  }

  return (
    <section className="todo__detail">
      <h1 className="todo__detail-title">TASK DETAIL</h1>
      <Container>
        <div className="todo__information">
          <div className="todo__information-group">
            <label htmlFor="title" className="todo__label">
              Task Title
            </label>
            <input
              className="todo__input"
              type="text"
              id="title"
              name="title"
              placeholder="Task Title"
              value={taskData.title}
              disabled
            />
          </div>
          <div className="todo__information-group">
            <label htmlFor="description" className="todo__label">
              Task Description
            </label>
            <textarea
              className="todo__input todo__textarea"
              id="description"
              name="description"
              placeholder="Task Description"
              value={taskData.description}
              disabled
            />
          </div>
          <div className="todo__information-group">
            <label htmlFor="creationDate" className="todo__label">
              Creation Date
            </label>
            <input
              className="todo__input"
              type="text"
              id="creationDate"
              name="creationDate"
              value={taskData.creationDate}
              disabled
            />
          </div>
        </div>
      </Container>
      <button onClick={() => navigate("/list")} className="todo__button-back">
        Back to List
      </button>
    </section>
  );
}

export default ToDoDetail;
