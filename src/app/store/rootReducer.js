import { combineReducers } from  "redux";
import countriesReducer from "../../features/Data/Reducers/countriesReducer";


const rootReducer = combineReducers({
    countries: countriesReducer,
   
})

export default rootReducer