import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setUser } from "../../redux/features/auth";
import Input from "../UI/Input";
import Button from "../UI/Button";
import cl from "./personalForm.module.css";
import plusIcon from "../../assets/img/plus.png";
import ChildForm from "./ChildForm";

function PersonalForm() {
  const history = useHistory();
  const dispatch = useDispatch();

  const [personalName, setName] = useState("");
  const [personalAge, setAge] = useState("");

  const [childData, setChildData] = useState([]);

  const handleSaveClick = () => {
    const userData = { personalName, personalAge, child: childData };
    dispatch(setUser(userData));
    history.push("/preview");
  };

  const handleRemoveClick = (id) => {
    const newArray = childData.filter((item) => item.id !== id);
    setChildData(newArray);
  };

  const handleAddClick = () => {
    const id = Math.random();
    setChildData([...childData, { id, name: "", age: "" }]);
  };

  const handleChange = (e, id) => {
    if (e.target.name === "name") {
      setName(e.target.value);
    }
    if (e.target.name === "age") {
      if (Number.isNaN(+e.target.value) || e.target.value === " ") {
        return;
      }
      setAge(e.target.value);
    }

    childData.forEach((item) => {
      if (item.id === id) {
        if (e.target.name === `name_${id}`) {
          item.name = e.target.value;
        }
        if (e.target.name === `age_${id}`) {
          if (Number.isNaN(+e.target.value) || e.target.value === " ") {
            return;
          }
          item.age = e.target.value;
        }
        const newArr = childData.map((i) => i);
        setChildData(newArr);
      }
    });
  };

  return (
    <>
      <div className={cl.textField}>
        <Input onChange={handleChange} labelText="Имя" name="name" value={personalName} />
      </div>
      <div className={cl.textField}>
        <Input onChange={handleChange} labelText="Возраст" name="age" value={personalAge} />
      </div>
      <div className={cl.childForm}>
        <div className={cl.childFormHeader}>
          <h3>Дети (макс. 5)</h3>
          <Button
            disabled={childData.length >= 5 ? true : false}
            addVariant
            onClick={handleAddClick}
          >
            <img src={plusIcon} alt="" /> Добавить ребенка
          </Button>
        </div>
        <div className={cl.childFormContainer}>
          {childData.map((item) => (
            <ChildForm
              handleRemoveClick={handleRemoveClick}
              id={item.id}
              key={item.id}
              handleChange={handleChange}
              valueName={item.name}
              valueAge={item.age}
            />
          ))}
        </div>
      </div>
      <Button onClick={handleSaveClick}>Сохранить</Button>
    </>
  );
}

export default PersonalForm;
