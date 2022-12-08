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
        <h3>Desarrollada por: Diana</h3>
        <p>
          Esta aplicacion fue creada con React, y consiste en un tablero en el
          cual puedes agregrar y ver personajes sorpresa de Rick and Morty.
        </p>
      </ContainText>
    </ContainAbout>
  );
}
