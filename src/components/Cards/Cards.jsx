import Card from "../Card/Card";
import { ContainerCards } from "./Cards.style";

export default function Cards(props) {
  const { characters } = props;
  return (
    <ContainerCards>
      {characters.map((eleCard, index) => (
        <Card
          id={eleCard.id}
          name={eleCard.name}
          image={eleCard.image}
          species={eleCard.species}
          gender={eleCard.gender}
          onClose={props.onClose}
          key={index}
        />
      ))}
    </ContainerCards>
  );
}
