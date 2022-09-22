import React from "react";
import styles from "./InputWithLabel.module.css";
import PropTypes from "prop-types";

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

InputWithLabel.propTypes = {
  id: PropTypes.string,
  value: PropTypes.node,
  type: PropTypes.string,
  onChange: PropTypes.func,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  children: PropTypes.string,
};

export default InputWithLabel;
