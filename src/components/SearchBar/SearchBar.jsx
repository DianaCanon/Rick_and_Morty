import React, { useState } from "react";
import styles from "./SearchBar.module.css";

export default function SearchBar(props) {
  const [characterId, setCharacterId] = useState("");

  const inputChange = (event) => {
    setCharacterId(event.target.value);
  };

  return (
    <div className={styles.divAgregar}>
      <input
        className={styles.inputAgregar}
        type="search"
        id=""
        value={characterId}
        onChange={inputChange}
        placeholder="Id personaje (1 a 826)"
      />
      <button
        className={styles.buttonAgregar}
        onClick={() => props.onSearch(characterId)}
      >
        Agregar
      </button>
      <button
        className={styles.buttonAgregar}
        onClick={() => props.onSearch(Math.round(Math.random() * 826))}
      >
        Personaje Sorpresa
      </button>
    
    </div>
  );
}
