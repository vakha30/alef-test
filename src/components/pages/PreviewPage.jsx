import React from "react";
import Preview from "../Preview/index";
import cl from "./pages.module.css";

function PreviewPage() {
  return (
    <div>
      <h1 className={cl.title}>Персональные данные</h1>
      <Preview />
    </div>
  );
}

export default PreviewPage;
