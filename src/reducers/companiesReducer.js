import { actionTypes } from '../utils/constants'

const companiesReducer = (state=[], action) => {
    switch (action.type){
        case actionTypes.DATA_FETCH_SUCCEEDED:
            return action.data.companies
        default:
            return state;
    }
}

export default companiesReducer