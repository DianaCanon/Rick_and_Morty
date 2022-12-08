/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import {
  ImgCard,
  H2Card,
  ButtonCard,
  Container,
  Headers,
  H2Card2,
  ButtonFav,
} from "./Card.style";
import { Link } from "react-router-dom";
import { deleteFavorite, addFavorite } from "../../redux/actions/actions.js";
import { connect } from "react-redux";

function Card(props) {
  // {name, species, gender, image}
  const {
    id,
    name,
    species,
    gender,
    image,
    onClose,
    deleteFavorite,
    addFavorite,
  } = props;

  const [isFav, setIsFav] = useState(false);

  useEffect(() => {
    console.log({ props });
    props.myFavorites.forEach((fav) => {
      if (fav.id === id) {
        setIsFav(true);
      }
    });
  }, [props.myFavorites]);

  const handleFavorite = () => {
    if (isFav) {
      setIsFav(false);
      deleteFavorite(id);
    } else {
      setIsFav(true);
      addFavorite({id, name,species, gender,image,onClose, deleteFavorite, addFavorite});
    }
  };

  return (
    <Container>
      <Link to={`/detail/${id}`}>
        <H2Card2>{name}</H2Card2>
      </Link>
      <ButtonCard onClick={() => onClose(id)}>X</ButtonCard>
      {isFav ? (
        <ButtonFav onClick={()=>handleFavorite()}>❤️</ButtonFav>
      ) : (
        <ButtonFav onClick={()=>handleFavorite()}>🤍</ButtonFav>
      )}
      {/* <ButtonFav onClick={handleFavorite}>{isFav ? "❤️" : "🤍"}</ButtonFav> */}
      <ImgCard src={image} alt="" />
      <Headers>
        <H2Card>{species}</H2Card>
        <H2Card>{gender}</H2Card>
      </Headers>
    </Container>
  );
}

export const mapStateToProps = (state) => {
  return {
    ...state,
  };
};

export const mapDispatchToProps = (dispatch) => {
  return {
    addFavorite: (character) => {
      dispatch(addFavorite(character));
    },
    deleteFavorite: (id) => {
      dispatch(deleteFavorite(id));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Card);
