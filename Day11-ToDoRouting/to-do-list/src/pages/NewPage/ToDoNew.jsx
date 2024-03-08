import { useEffect, useState } from "react";
import Container from "../../components/container/Container";
import "./todoNew.css";
import {
  descriptionValidation,
  titleValidation,
  validateForm,
} from "../../utils/validations";
import { addTask } from "../../services/localStorageService";
import calculateId from "../../utils/calculateId";
import { useNavigate } from "react-router-dom";

function ToDoNew() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    creationDate: new Date().toISOString().split("T")[0],
  });
  const [errors, setErrors] = useState({});
  const [submitBehavior, setSubmitBehavior] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      setSubmitBehavior(null);
    }, 3000);
  }, [submitBehavior]);

  const handleInputChange = (event) => {
    if (errors) {
      setErrors({ ...errors, [event.target.name]: "" });
    }
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    if (validateForm(formData)) {
      try {
        addTask({
          ...formData,
          id: calculateId(),
        });
        setFormData({
          title: "",
          description: "",
          creationDate: new Date().toISOString().split("T")[0],
        });
        setErrors({});
        setSubmitBehavior(true);
      } catch (error) {
        setSubmitBehavior(false);
      }
    } else {
      const titleErrors = titleValidation(formData.title);
      const descriptionErrors = descriptionValidation(formData.description);
      setErrors({
        title: titleErrors.required || titleErrors.minLength,
        description:
          descriptionErrors.required ||
          descriptionErrors.maxLength ||
          descriptionErrors.minLength,
      });
    }
  };

  return (
    <section className="todo__new-container">
      <h1 className="todo__new-title">NEW TASK</h1>
      <Container>
        {submitBehavior === true && (
          <p className="success__message-submit">Task added successfully!</p>
        )}

        {submitBehavior === false && (
          <p className="error__message-submit">An error occurred!</p>
        )}

        <form onSubmit={handleFormSubmit} className="todo__new-form">
          <div className="todo__new-group">
            <input
              className={`todo__new-input ${errors.title ? "error" : ""}`}
              type="text"
              id="title"
              name="title"
              placeholder="TODO Title"
              onChange={handleInputChange}
              value={formData.title}
            />
            <p className={`error__message ${errors.title ? "" : "hidden"}`}>
              {errors.title || ""}
            </p>
          </div>
          <div className="todo__new-group">
            <textarea
              className={`todo__new-input todo__new-textarea ${
                errors.description ? "error" : ""
              }`}
              id="description"
              name="description"
              placeholder="TODO Description"
              onChange={handleInputChange}
              value={formData.description}
            />
            <p
              className={`error__message ${errors.description ? "" : "hidden"}`}
            >
              {errors.description || ""}
            </p>
          </div>
          <div className="todo__new-group">
            <input
              className="todo__new-input"
              type="date"
              id="dueDate"
              name="dueDate"
              onChange={handleInputChange}
              value={formData.creationDate}
              disabled
            />
          </div>
          <button type="submit" className="todo__new-submit">
            Submit
          </button>
        </form>
      </Container>
      <button className="button__back" onClick={() => navigate("/list")}>
        Back to list
      </button>
    </section>
  );
}

export default ToDoNew;
