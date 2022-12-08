import {
  ADD_FAVORITE,
  DELETE_FAVORITE,
  FILTER,
  ORDER,
} from "../actions/actions";

const initialState = {
  myFavorites: [],
  allCharacters: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FAVORITE:
      return {
        ...state,
        myFavorites: [...state.allCharacters, action.payload],
        allCharacters: [...state.allCharacters, action.payload],
      };
    case DELETE_FAVORITE:
      return {
        ...state,
        myFavorites: state.myFavorites.filter(
          (fav) => fav.id !== action.payload
        ),
      };
    case FILTER:
      const copyfilter = [...state.allCharacters];
      const filterCharacters = copyfilter.filter(
        (ele) => ele.gender === action.payload
      );
      return { ...state, myFavorites: filterCharacters };
    case ORDER:
      const copyOrder = [...state.allCharacters];

      if (action.payload === "Ascendente") {
        return { ...state, myFavorites: copyOrder.sort((a, b) => a.id - b.id) };
      }
      if (action.payload === "Descendente") {
        return { ...state, myFavorites: copyOrder.sort((a, b) => b.id - a.id) };
      } else {
        return { ...state };
      }
    default:
      return { ...state };
  }
};

export default reducer;
