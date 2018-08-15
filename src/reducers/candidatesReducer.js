import { actionTypes } from '../utils/constants'

const candidatesReducer = (state=[], action) => {
    switch (action.type){
        case actionTypes.DATA_FETCH_SUCCEEDED:
            return action.data.candidates
        default:
            return state;
    }
}

export default candidatesReducer