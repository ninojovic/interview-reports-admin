import { actionTypes } from '../utils/constants'

const initialState = {
    selectedCandidateName: null,
    selectedCandidateId: null,
    selectedCompanyName: null,
    selectedCompanyId: null,
    interviewDate: null,
    phase: null,
    passed: false,
    notes: null
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
        case actionTypes.INTERVIEW_DATE_SELECTED:
            return {
                ...state,
                interviewDate: action.interviewDate,
            }
        case actionTypes.PHASE_SELECTED:
            return {
                ...state,
                phase: action.phase
            }
        case actionTypes.STATUS_SELECTED:
            return {
                ...state,
                status: action.status
            }
        case actionTypes.NOTES_FILLED_IN:
            return {
                ...state,
                notes: action.notes
            }
        case actionTypes.RESET_WIZARD_DATA:
            return {
                initialState
            }
        default:
            return state;
    }
}

export default wizardDataReducer