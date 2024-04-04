export const validateFirstName = (firstName) => {
  if (!firstName) return 'First name is required';
  if (firstName.length < 3) return 'First name should be at least 3 characters';
  return null;
};

export const validateLastName = (lastName) => {
  if (!lastName) return 'Last name is required';
  if (lastName.length < 5) return 'Last name should be at least 5 characters';
  return null;
};

export const validateEmail = (email) => {
  if (!email) return 'Email is required';
  if (!/^\S+@(gmail\.com|globant\.com)$/.test(email))
    return 'Email is not valid, only Gmail or Globant domains are allowed';
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
