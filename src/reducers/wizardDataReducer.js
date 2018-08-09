import { actionTypes } from '../utils/constants'

const initialState = {
    candidateName: null,
    candidateId: null,
    companyName: null,
    companyId: null,
    interviewDate: null,
    phase: null,
    status: null,
    notes: null,
    isReadyForPost: false,
}

const wizardDataReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.CANDIDATE_SELECTED:
            return {
                ...state,
                candidateName: action.candidateName,
                candidateId: action.candidateId
            }
        case actionTypes.COMPANY_SELECTED:
            return {
                ...state,
                companyName: action.companyName,
                companyId: action.companyId
            }
        case actionTypes.DETAILS_FILLED_IN:
            return {
                ...state,
                interviewDate: action.interviewDate,
                phase: action.phase,
                status: action.status,
                notes: action.notes
            }
        case actionTypes.RESET_WIZARD_DATA:
            return initialState

        case actionTypes.IS_READY_FOR_POST:
            return {
                ...state,
                isReadyForPost: action.isReadyForPost
            }
        default:
            return state;
    }
}

export default wizardDataReducer