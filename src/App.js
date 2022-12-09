/* eslint-disable react-hooks/exhaustive-deps */
import "./App.css";
import Cards from "./components/Cards/Cards.jsx";
import Nav from "./components/Nav/Nav.jsx";
import { useState, useEffect } from "react";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import About from "./components/About/About.jsx";
import Detail from "./components/Detail/Detail.jsx";
import Error404 from "./components/Error404/Error404";
import Form from "./components/Form/Form";
import Favorites from "./components/Favorites/Favorites";

function App(props) {
  /*  const example = {
    name: 'Morty Smith',
    species: 'Human',
    gender: 'Male',
    image: 'https://rickandmortyapi.com/api/character/avatar/2.jpeg',
   };
 */
  const [characters, setCharacters] = useState([]);

  const onSearch = (character) => {
    fetch(`https://rickandmortyapi.com/api/character/${character}`)
      .then((response) => response.json())
      .then((data) => {
        let reviewId = characters.find((ele) => ele.id === data.id);

        if (data.name) {
          if (reviewId === undefined) {
            setCharacters((oldChars) => [...oldChars, data]);
          } else {
            window.alert("Personaje ya se encuentra en pantalla");
          }
        } else {
          window.alert("No hay personajes con ese ID");
        }
      });
  };

  const onClose = (id) => {
    setCharacters(characters.filter((ele) => ele.id !== id));
  };

  const location = useLocation();

  const navigate = useNavigate();
  const [access, setAccess] = useState(false);
  let username = "alguien@gmail.com";
  let password = "ABC123";
  const login = (userData) => {
    if (username === userData.username && password === userData.password) {
      setAccess(true);
      navigate("/home");
    } else if (
      username === userData.username &&
      password !== userData.password
    ) {
      alert("Verifica tus datos, contraseña incorrecta");
    } else {
      alert("usuario no registrado");
    }
  };

  const logout = () => {
    if (access) alert("cerrado");
    setAccess(!access);
    /* navigate('/') */
    /*setCharacters({})  */
  };

  useEffect(() => {
    console.log({ location: location.pathname });
    !access && navigate("/");
  }, [access]);

  return (
    <div >
      {location.pathname !== "/" && (
        <div className="App">
          <Nav onSearch={onSearch} logout={logout} />
        </div>
      )}
      <div className="container">
        <Routes>
          <Route exact path="/" element={<Form login={login} />} />
          <Route
            exact
            path="/home"
            element={<Cards characters={characters} onClose={onClose} />}
          />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/detail/:detailId" element={<Detail />} />
          <Route exact path="/favorites" element={<Favorites />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
