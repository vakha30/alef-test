import React from "react";
import PersonalForm from "../PersonalForm";
import cl from "./pages.module.css";

function FormPage() {
  return (
    <div>
      <h1 className={cl.title}>Персональные данные</h1>
      <PersonalForm />
    </div>
  );
}

export default FormPage;
