import React from "react";
import Input from "../UI/Input";
import cl from "./personalForm.module.css";

function ChildForm({ id, handleRemoveClick, handleChange, valueName, valueAge }) {
  return (
    <div className={cl.childFormItem}>
      <Input
        labelText="Имя"
        name={`name_${id}`}
        onChange={(e) => handleChange(e, id)}
        value={valueName}
      />
      <Input
        labelText="Возраст"
        name={`age_${id}`}
        onChange={(e) => handleChange(e, id)}
        value={valueAge}
      />
      <button onClick={() => handleRemoveClick(id)}>Удалить</button>
    </div>
  );
}

export default ChildForm;
