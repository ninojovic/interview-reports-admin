import { actionTypes } from '../utils/constants'

const candidatesReducer = (state=[], action) => {
    switch (action.type){
        case actionTypes.CANDIDATES_FETCH_SUCCEEDED:
            return action.candidates
        default:
            return state;
    }
}

export default candidatesReducer