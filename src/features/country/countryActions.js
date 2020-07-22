import { asyncActionStart, asyncActionFinish } from "../async/asyncActions"
import { FETCH_COUNTRIES } from "./countryConstants"
import { getSampleData } from "../data/mockApi"

export const loadCountries = () => {
    return async dispatch =>{
        try {
            dispatch(asyncActionStart())
            const countries = await getSampleData()
            dispatch({type: FETCH_COUNTRIES, payload: {countries} })
        } catch (error) {
            console.log(error);
            dispatch(asyncActionFinish())
        }
    }
}