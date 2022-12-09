import React from "react";
import { useNavigate } from "react-router-dom";
import { ButtonAbout, ContainAbout, ContainText,Titulo } from "./About.style";

export default function About(props) {
  const navigate = useNavigate();
  return (
    <ContainAbout>
      <ButtonAbout onClick={() => navigate("/home")}>Home</ButtonAbout>
      <br />
      <ContainText>
        <Titulo>ABOUT</Titulo>
        <h2>Acerca de la App..</h2>
        <p>
          Esta aplicacion fue creada con React, y consiste en un tablero al cual puedes agregar, eliminar y adicionar personajes sorpresa de Rick and Morty los cuales verás en pantalla!, en cada carta tienes 
          la opción de tener un detalle adicionale de cada personaje. 
          
          Esta aplicación tambien te permite escoger tus personajes favoritos y de estos tener una vista en orden por id del personaje o puedes filtrarlo por su especie! diviértete averiguando mas de los personajes de esta serie!
        </p>
        <hr/>
        <h2>Quien desarrollo esta App?</h2>
        <p>
          Esta aplicación fue desarrollada por Diana Cañón, una contadora colombiana
          que ha liderado varios proyectos de automatización en el área contable, que
          despertaron su interés en los procesos de programación.  Por lo cual actualmente
          se encuetra cursando el bootcamp en Henry, y se ha convertido en una enamorada
          del desarrollo web.
        </p>
      </ContainText>
    </ContainAbout>
  );
}
