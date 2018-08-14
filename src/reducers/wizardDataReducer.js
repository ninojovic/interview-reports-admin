import { actionTypes } from '../utils/constants'
import { containsNullValue } from '../utils/helpers'

const initialState = {
    candidateName: null,
    candidateId: null,
    companyName: null,
    companyId: null,
    interviewDate: null,
    phase: null,
    status: null,
    notes: "",
    isReadyForPost: false
}

const wizardDataReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.CANDIDATE_SELECTED: {
            return {
                ...state,
                candidateName: action.candidateName,
                candidateId: action.candidateId
            }
        }

        case actionTypes.COMPANY_SELECTED: {
            return {
                ...state,
                companyName: action.companyName,
                companyId: action.companyId
            }
        }

        case actionTypes.INTERVIEW_DATE_SELECTED: {
            let newState = {
                ...state,
                interviewDate: action.interviewDate,
            }
            newState.isReadyForPost = !containsNullValue(newState)

            return newState
        }

        case actionTypes.PHASE_SELECTED: {
            let newState = {
                ...state,
                phase: action.phase,
            }
            newState.isReadyForPost = !containsNullValue(newState)

            return newState
        }

        case actionTypes.STATUS_SELECTED: {
            let newState = {
                ...state,
                status: action.status,
            }

            newState.isReadyForPost = !containsNullValue(newState)
            return newState
        }

        case actionTypes.NOTES_FILLED_IN: {
            return {
                ...state,
                notes: action.notes
            }
        }

        case actionTypes.RESET_WIZARD_DATA: {
            return initialState
        }

        default: {
            return state;
        }
    }
}

export default wizardDataReducer