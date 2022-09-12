import React from "react";
import styles from "./InputWithLabel.module.css";

const InputWithLabel = ({
  id,
  value,
  type = "text",
  onChange,
  name,
  placeholder,
  children,
}) => {
  const inputRef = React.useRef();
  React.useEffect(() => {
    inputRef.current.focus();
  });

  return (
    <>
      <label htmlFor={id}>{children} </label>
      <input
        className={styles.input}
        id={id}
        type={type}
        value={value}
        onChange={onChange}
        name={name}
        placeholder={placeholder}
        ref={inputRef}
      ></input>
    </>
  );
};

export default InputWithLabel;
