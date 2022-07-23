import React from "react";

const InputWithLabel = ({
  id,
  label,
  value,
  type = "text",
  onChange,
  name,
  placeholder,
}) => {
  return (
    <>
      <label htmlFor={id}>{label} </label>
      <input
        id={id}
        type={type}
        value={value}
        onChange={onChange}
        name={name}
        placeholder={placeholder}
      ></input>
    </>
  );
};

export default InputWithLabel;
