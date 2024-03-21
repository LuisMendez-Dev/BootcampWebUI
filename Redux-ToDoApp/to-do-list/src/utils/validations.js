const titleValidation = (title) => {
  const errors = {
    required: "",
    minLength: "",
  };

  if (!title) {
    errors.required = "Title is required";
  } else if (title.length < 5) {
    errors.minLength = "Title should be at least 5 characters long";
  }

  return errors;
};

const descriptionValidation = (description) => {
  const errors = {
    required: "",
    maxLength: "",
    minLength: "",
  };

  if (!description) {
    errors.required = "Description is required";
  } else if (description.length > 20) {
    errors.maxLength = "Description should be at most 20 characters long";
  } else if (description.length < 10) {
    errors.minLength = "Description should be at least 10 characters long";
  }

  return errors;
};

const validateForm = (formData) => {
  const titleErrors = titleValidation(formData.title);
  const descriptionErrors = descriptionValidation(formData.description);

  return (
    Object.values(titleErrors).every((error) => !error) &&
    Object.values(descriptionErrors).every((error) => !error)
  );
};

export { titleValidation, descriptionValidation, validateForm };
