import React from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../../redux/features/auth";
import cl from "./preview.module.css";

function Preview() {
  const user = useSelector(selectUser);
  return (
    <div className={cl.preview}>
      <h2 className={cl.previewUserInfo}>
        {user.personalName}, {user.personalAge} лет
      </h2>
      <div className={cl.previewChild}>
        <h3>Дети</h3>
        <div className={cl.child}>
          {user.child.length > 0 ? (
            user.child.map((item, index) => (
              <div key={`${item.age}_${index}`} className={cl.childItem}>
                {item.name}, {item.age}
              </div>
            ))
          ) : (
            <h4>нету детей</h4>
          )}
        </div>
      </div>
    </div>
  );
}

export default Preview;
