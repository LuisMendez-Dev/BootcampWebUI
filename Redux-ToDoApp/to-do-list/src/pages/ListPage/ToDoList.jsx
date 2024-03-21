import { Link, useNavigate } from "react-router-dom";
import Card from "../../components/Card/Card";
import Container from "../../components/container/Container";
import { useDispatch, useSelector } from "react-redux";
import { deleteTodo, resetToDefault, toggleStatus } from "../../redux/slices";
import "./todoList.css";

function ToDoList() {
  const tasksData = useSelector((state) => state.todos.allTodos);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleDeleteTask = (id) => {
    try {
      dispatch(deleteTodo(id));
    } catch (error) {
      console.log(error);
    }
  };

  const handleChangeStatus = (id) => {
    try {
      dispatch(toggleStatus(id));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section className="todo">
      <h1 className="todo__title">TODO LIST</h1>
      <Container>
        {tasksData.length === 0 && <p> No tasks!</p>}
        {tasksData && (
          <ul className="todo__list">
            {tasksData.map((todo) => (
              <li key={todo.id} className="todo__list-item">
                <Card
                  task={todo}
                  handleDeleteTask={() => handleDeleteTask(todo.id)}
                  onClick={() => {
                    navigate(`/detail/${todo.id}`);
                  }}
                  handleChange={() => handleChangeStatus(todo.id)}
                  status={todo.status}
                />
              </li>
            ))}
          </ul>
        )}
      </Container>
      <div className="todo__container-buttons">
        <button className="todo__button todo__button-add">
          <Link to={"/new"} className="todo__button-link">
            New Todo
          </Link>
        </button>
        <button
          className="todo__button todo__button-delete"
          style={
            tasksData && tasksData.length === 0 ? { display: "none" } : null
          }
          onClick={() => {
            dispatch(resetToDefault());
          }}
        >
          Delete All
        </button>
      </div>
    </section>
  );
}

export default ToDoList;
