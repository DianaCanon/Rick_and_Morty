import "./favorites.modules.css";
import { NavLink } from "react-router-dom";
import { connect, useDispatch } from "react-redux";
import { filterCards, orderCards } from "../../redux/actions/actions";
import Card from "../Card/Card";

const Favorites = (props) => {
  const dispatch = useDispatch();

  const handleClick = (e) => {
    let { value, name } = e.target;
    if (name === "order") {
      dispatch(orderCards(value));
    }
    if (name === "filter") {
      dispatch(filterCards(value));
    }
  };

  return (
    <div className="containerFavorites">
      <div className="containerHome">
        <NavLink to="/home">
          <button className="buttonHome">Home</button>
        </NavLink>
        <div>
          <span>Ordenar:</span>
          <select name="order" onClick={handleClick}>
            <option value="Ascendente">Ascendente</option>
            <option value="Descendente">Descendente</option>
          </select>
        </div>
        <div>
          <span>Filtrar por:</span>
          <select name="filter" onClick={handleClick}>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Genderless">Genderless</option>
            <option value="unknown">unknown</option>
          </select>
        </div>
      </div>
      <div className="containerCards">
        {props.myFavorites?.map((eleFav, index) => (
          <Card
            id={eleFav.id}
            name={eleFav.name}
            image={eleFav.image}
            species={eleFav.species}
            gender={eleFav.gender}
            key={index}
          />
        ))}
      </div>
    </div>
  );
};

export const mapStateToProps = (state) => {
  return {
    myFavorites: state.myFavorites,
  };
};

export default connect(mapStateToProps, null)(Favorites);
