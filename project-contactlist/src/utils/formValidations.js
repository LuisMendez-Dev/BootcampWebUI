export const validateFirstName = (firstName) => {
  if (!firstName) return 'First name is required';
  if (firstName.length < 4) return 'First name should be at least 4 characters';
  return null;
};

export const validateLastName = (lastName) => {
  if (!lastName) return 'Last name is required';
  if (lastName.length < 4) return 'Last name should be at least 2 characters';
  return null;
};

export const validateEmail = (email) => {
  if (!email) return 'Email is required';
  return null;
};

export const validateForm = (form) => {
  const errors = {
    firstName: validateFirstName(form.firstName),
    lastName: validateLastName(form.lastName),
    email: validateEmail(form.email),
  };
  return errors;
};

export const validateFormOnSubmit = (form) => {
  const errors = validateForm(form);
  const isValid = Object.values(errors).every((error) => error === null);
  return { errors, isValid };
};
