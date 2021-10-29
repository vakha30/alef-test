import React from "react";
import cl from "./input.module.css";

const Input = ({ onChange, labelText, value, name }) => {
  return (
    <div className={cl.input}>
      <input type="text" onChange={onChange} name={name} value={value} />
      <label>{labelText}</label>
    </div>
  );
};

export default Input;
