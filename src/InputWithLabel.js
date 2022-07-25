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
  const inputRef = React.useRef();
  React.useEffect(() => {
    inputRef.current.focus();
  });
  //   This is the most straightforward usage of useEffect
  //   where we only pass one argument -- a function.
  //   This function will render on every render -- meaning
  //   it runs on the first render of the component
  //   (also called on mount or mounting of the component)
  //   and on every re-render of the component
  //   (also called on update or updating of the component).

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
        ref={inputRef}
      ></input>
    </>
  );
};

export default InputWithLabel;
