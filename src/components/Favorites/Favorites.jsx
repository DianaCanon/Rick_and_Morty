import "./favorites.modules.css";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import Card from "../Card/Card";

const Favorites = (props) => {
  return (
    <div className="container">
      <NavLink to="/home">
        <button className="buttonHome">Home</button>
      </NavLink>

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
  );
};

export const mapStateToProps = (state) => {
  return {
    myFavorites: state.myFavorites,
  };
};



export default connect(mapStateToProps, null)(Favorites);
