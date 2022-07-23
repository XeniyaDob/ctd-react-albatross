import React from "react";

const InputWithLabel = ({
  id,
  value,
  type = "text",
  onChange,
  name,
  placeholder,
  children,
}) => {
  return (
    <>
      <label htmlFor={id}>{children} </label>
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
