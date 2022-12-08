import styles from "./Detail.module.css";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function Detail(props) {
  const { detailId } = useParams();
  const navigate = useNavigate();
  const [character, setCharacter] = useState({});

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/${detailId}`)
      .then((response) => response.json())
      .then((char) => {
        console.log(char);
        if (char.name) {
          setCharacter(char);
        } else {
          window.alert("No hay personajes con ese ID");
        }
      })
      .catch((err) => {
        window.alert("No hay personajes con ese ID");
      });
    return setCharacter({});
  }, [detailId]);

  return (
    
    <div>
      <div className={styles.contain}>
          <button className={styles.buttonDetail} onClick={() => navigate("/home")}>
            Home
          </button>
        </div>
      {character?(
      <div>
        
        <div className={styles.containText}>
          <img
            src={character.image}
            alt="imagen {character.name}"
            className={styles.imgDetail}
          />
          <h1>NOMBRE: {character.name}</h1>
          <h2>STATUS: {character.status}</h2>
          <h2>ESPECIE: {character.species}</h2>
          <h2>GENERO: {character.gender}</h2>
          <h2>ORIGEN: {character.origin?.name}</h2>
        </div>
      </div>): ''}
    </div>
  );
}
