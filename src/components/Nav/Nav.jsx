import React from "react";
/* import About from "../About/About"; */
import SearchBar from "../SearchBar/SearchBar";
import styles from "./Nav.module.css";
import { NavLink, useLocation } from "react-router-dom";

function Nav(props) {
  const handleSubmit = () => {
    props.logout();
  };

  const location = useLocation();

  return (
    <>
      <div className={styles.divMenu}>
        <NavLink to="/home">
          <span className={styles.checkbox}>Home</span>
        </NavLink>
        <NavLink to="/about">
          <span className={styles.checkbox}>About</span>
        </NavLink>
        <NavLink to="/">
          <span onClick={handleSubmit} className={styles.checkbox}>
            Logout
          </span>
        </NavLink>
        <NavLink to="/favorites">
          <button className={styles.buttonFavorites}>Favoritos</button>
        </NavLink>
      </div>
      <div className={styles.divSearch}>
        {location.pathname === "/home" && (
          <SearchBar onSearch={props.onSearch} />
        )}
      </div>
    </>
  );
}

export default Nav;
