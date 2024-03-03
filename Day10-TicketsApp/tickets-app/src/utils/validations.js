const titleValidation = (title) => {
  if (title === "") {
    return "Title is required";
  } else if (title.length < 6 || title.length > 18) {
    return "Title must be between 6 and 18 characters";
  }
  return "";
};

const priorityValidation = (priority) => {
  if (priority === "") {
    return "Priority is required";
  }
  return "";
};

const descriptionValidation = (description) => {
  return description.length > 30
    ? "Description must be less than 30 characters"
    : "";
};

export { titleValidation, priorityValidation, descriptionValidation };
