/* eslint-disable react/prop-types */
function InputForm({
  goal,
  type,
  name,
  id,
  className,
  value,
  onChange,
  disabled,
  placeholder,
}) {
  return (
    <>
      {goal === "text" ? (
        <input
          type={type}
          name={name}
          id={id}
          className={className}
          value={value}
          onChange={onChange}
          disabled={disabled}
          placeholder={placeholder}
        />
      ) : goal === "select" ? (
        <select
          name={name}
          id={id}
          className={className}
          value={value}
          onChange={onChange}
          disabled={disabled}
        >
          <option value="">Select Priority</option>
          <option value="3">Low</option>
          <option value="2">Medium</option>
          <option value="1">High</option>
        </select>
      ) : goal === "textarea" ? (
        <textarea
          name={name}
          id={id}
          cols="40"
          rows="5"
          className={className}
          value={value}
          onChange={onChange}
          disabled={disabled}
          placeholder={placeholder}
        ></textarea>
      ) : null}
    </>
  );
}

export default InputForm;
