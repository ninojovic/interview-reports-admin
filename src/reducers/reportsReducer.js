import { actionTypes } from '../utils/constants'

const reportsReducer = (state=[], action) => {
    switch (action.type){
        case actionTypes.DATA_FETCH_SUCCEEDED:
            return action.data.reports
        default:
            return state;
    }
}

export default reportsReducer