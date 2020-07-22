import asyncReducer from "../../features/async/asyncReducer";
import countryReducer from "../../features/country/countryReducer"

const { combineReducers } = require("redux");
const { default: testReducer } = require("../../features/testarea/testReducer");


const rootReducer = combineReducers({
    test: testReducer,
    async: asyncReducer,
    countries:countryReducer
    
})

export default rootReducer