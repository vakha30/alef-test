import React from "react";
import { NavLink } from "react-router-dom";
import cl from "./header.module.css";
import logo from "../../assets/img/logo.png";

function Header() {
  return (
    <header className={cl.header}>
      <NavLink exact to="/">
        <img src={logo} alt="" />
      </NavLink>
      <div className={cl.menu}>
        <NavLink exact to="/" activeClassName={cl.active}>
          Форма
        </NavLink>
        <NavLink to="/preview" activeClassName={cl.active}>
          Превью
        </NavLink>
      </div>
      <div className={cl.hiden}></div>
    </header>
  );
}

export default Header;
