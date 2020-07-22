const { FETCH_COUNTRIES } = require("./countryConstants")

const initialState = [
    
]

const countryReducer = (state = initialState, action) => {
        switch(action.type){
            case FETCH_COUNTRIES:
              return {...state, countries: action.payload }
              default:
              return state
        }
}

export default countryReducer   