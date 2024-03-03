const formValidator = ({
  ticketData,
  titleValidation,
  priorityValidation,
  descriptionValidation,
  setTicketData,
}) => {
  const errors = {};
  errors.title = titleValidation(ticketData.title);
  errors.priority = priorityValidation(ticketData.priority);
  errors.description = descriptionValidation(ticketData.description);

  const valid = Object.values(errors).every((error) => error === "");

  if (!valid) {
    setTicketData({ ...ticketData, errors });
  }

  return valid;
};

export default formValidator;
