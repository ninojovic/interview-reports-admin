import { actionTypes } from '../utils/constants'

const reportsReducer = (state=[], action) => {
    switch (action.type){
        case actionTypes.REPORTS_FETCH_SUCCEEDED:
            return action.reports
        default:
            return state;
    }
}

export default reportsReducer