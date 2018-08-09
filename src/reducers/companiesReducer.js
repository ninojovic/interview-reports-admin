import { actionTypes } from '../utils/constants'

const companiesReducer = (state=[], action) => {
    switch (action.type){
        case actionTypes.COMPANIES_FETCH_SUCCEEDED:
            return action.companies
        default:
            return state;
    }
}

export default companiesReducer