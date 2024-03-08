import { Link, useNavigate } from "react-router-dom";
import Card from "../../components/Card/Card";
import { useEffect, useState } from "react";
import "./todoList.css";
import {
  getTasks,
  setTasks,
  deleteTask,
} from "../../services/localStorageService";
import Container from "../../components/container/Container";

function ToDoList() {
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (getTasks().length > 0) {
      setData(getTasks());
    } else {
      setTasks([]);
    }
  }, []);

  const handleDeleteTask = (id) => {
    deleteTask(id);
    setData(getTasks());
  };

  return (
    <>
      <section className="todo">
        <h1 className="todo__title">TODO LIST</h1>
        <Container>
          {data.length <= 0 && <p>No tasks!</p>}
          {data && (
            <ul className="todo__list">
              {data.map((todo) => (
                <li key={todo.id} className="todo__list-item">
                  <Card
                    task={todo}
                    handleDeleteTask={() => handleDeleteTask(todo.id)}
                    onClick={() => {
                      navigate(`/detail/${todo.id}`);
                    }}
                  />
                </li>
              ))}
            </ul>
          )}
        </Container>
        <button className="todo__button">
          <Link to={"/new"} className="todo__button-link">
            New Todo
          </Link>
        </button>
      </section>
    </>
  );
}

export default ToDoList;
