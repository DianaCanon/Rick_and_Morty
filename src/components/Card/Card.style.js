import styled from "styled-components";

const Container = styled.div`
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: space-evenly;
  max-width: 14rem;
  margin: 1.5rem auto auto auto;
  position: relative;
  top: 5rem;
  
 `;

const ImgCard = styled.img`
  border-radius: 15px 15px 0 0;
  border-right: 5px solid rgb(53 53 98 / 71%);
  /* &:hover{
   transform: rotateY(360deg)
  };  */
`;

const Headers = styled.div`
  display: flex;
  flex-direction: row;
  justify-content:space-evenly;
  text-align: center;
  border-right: 5px solid rgb(53 53 98 / 71%);
  border-bottom: 5px solid rgb(53 53 98 / 71%);
  border-radius: 0px 0px 3px 0px;
  `;

const H2Card = styled.h2`
  justify-content: space-evenly;
  display: flex;
  align-items: center;
  background-color: #39b2b0b8;
  font-size: 0.97em;
  border-radius: 0px 0px 3px 3px;
  border: black dotted 1px;
  width: 50%;
  height: 1.8rem;
  margin: 0;
  padding: 0.3rem;
 `;

const H2Card2 = styled(H2Card)`
  height: auto;
  color: white;
  text-shadow: 2px 2px 4px #000000;
  background-color: #2c2222b5;
  border: none;
  border-radius: 3px;
  width: unset;
  position: absolute;
  left: 0.5rem;
  bottom: 3.2rem; 
  box-shadow: 0.15rem 0.15rem #c7b7b794;
  &:hover{
    filter: brightness(110%);
    color: yellowgreen;
    transform: translate(0.5rem);
  } 
`;


const ButtonCard = styled.button`
  background: #7c1015;
  color: white;
  width: fit-content;
  height: fit-content;
  font-size: 1.1em;
  border-radius: 5px;
  border-bottom: 0.15rem solid #4c0f0f;
  border-right: 0.15rem solid #4c0f0f;
  border-top: none ;
  border-left:none;
  position: absolute;
  top: 0.5rem;
  right: 0.8rem;
  &:hover {
    filter: brightness(150%) ;
    border-bottom: 0.15rem solid #4c0f0f;
  border-right: 0.15rem solid #4c0f0f;
    color: #a0e931;
  }
`;

const ButtonFav= styled(ButtonCard) `
  top: 0.5rem;
  left: 00.8rem; 
  background: none; 
  width: fit-content;
  height: fit-content
`

export { Headers, Container, ImgCard, H2Card, ButtonCard, H2Card2, ButtonFav};
