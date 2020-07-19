import { FETCH_COUNTRIES_REQUEST, FETCH_COUNTRIES_SUCCESS, FETCH_COUNTRIES_ERROR } from "./ActionTypeConstants";

export function fetchCountriesRequest() {
    return {
      type: FETCH_COUNTRIES_REQUEST
    };
  }
  
  export function fetchCountriesSuccess(countries) {
    return {
      type: FETCH_COUNTRIES_SUCCESS,
      countries
    };
  }
  
  export function fetchCountriesError(error) {
    return {
      type: FETCH_COUNTRIES_ERROR,
      payload: { error }
    };
  }