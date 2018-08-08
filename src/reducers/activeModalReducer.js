import { actionTypes } from '../utils/constants'

const activeModalReducer = (state=null, action) => {
    switch (action.type){
        case actionTypes.SET_ACTIVE_MODAL:
            return action.report
        default:
            return state;
    }
}

export default activeModalReducer