import { FETCH_COUNTRIES_REQUEST, FETCH_COUNTRIES_SUCCESS, FETCH_COUNTRIES_ERROR } from "../Actions/actionTypeConstants";

  const initialState = {
    loading: false,
    countries: [],
    error: "", 
  };
  
  const countriesReducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_COUNTRIES_REQUEST:
        return {
          ...state,
          loading: true,
        };
      case FETCH_COUNTRIES_SUCCESS:
        return {
          loading: false,
          countries: action.payload,
          error: "",
        };
      case FETCH_COUNTRIES_ERROR:
        return {
          loading: false,
          countries: [],
          error: action.payload,
        };
  
      default:
        return state;
    }
  };
  
  export default countriesReducer;
  