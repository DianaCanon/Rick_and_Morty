import styled from "styled-components";

const ContainAbout = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  margin: auto 2rem;
  position: absolute;
  top: 8rem;
`;

const ButtonAbout = styled.button`
  background-color: #39b1b1c7;
  color: white;
  width: fit-content;
  font-size: 1rem;
  font-weight: 600;
  border-radius: 0.5rem;
  padding: 0.4rem;
  border-bottom: 0.15rem solid #84d1f0ea;
  border-right: 0.15rem solid #84d1f0ea;
  border-top: none;
  border-left: none;
  &:hover {
    transform: translate(-0.8rem);
    transition: transform 250ms cubic-bezier(0.3, 0.7, 0.4, 1.5);
    background-color: rgba(107, 151, 19, 0.788);
    border-bottom: 0.15rem solid rgba(145, 196, 43, 0.788);
    border-right: 0.15rem solid rgba(145, 196, 43, 0.788);
    color: white;
  }
`;

const ContainText = styled.div`
  background-color: #080a1abd;
  padding: 1rem;
  border-radius: 1rem;
  align-items: center;
  color: white;
`;

const Titulo = styled.h1`
  display: flex;
  justify-content: center;
  align-content: center;
  text-shadow: 2px 2px 4px #000000;
`;

export { Titulo, ContainAbout, ButtonAbout, ContainText };
