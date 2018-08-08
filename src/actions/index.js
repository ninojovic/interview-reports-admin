import { actionTypes } from '../utils/constants'

export const fetchReportsSucceed = (reports) => {
    return {
        type: actionTypes.REPORTS_FETCH_SUCCEEDED,
        reports
    }
}

export const fetchReportsRequest = () => {
    console.log("fetching reports")
    return {
        type: actionTypes.REPORTS_FETCH_REQUESTED
    }
}

export const selectCandidate = (candidateName, candidateId) => {
    return {
        type: actionTypes.CANDIDATE_SELECTED,
        candidateName,
        candidateId
    }
}

export const fetchCandidatesRequest = () => {
    console.log("fetching candidates")
    return {
        type: actionTypes.CANDIDATES_FETCH_REQUESTED
    }
}

export const fetchCandidatesSucceed = (candidates) => {
    return {
        type: actionTypes.CANDIDATES_FETCH_SUCCEEDED,
        candidates
    }
}

export const deleteRequest = (id) => {
    return {
        type: actionTypes.REPORT_DELETE_REQUESTED,
        id
    }
}

export const deleteSucceed = (id) => {
    console.log("delete succeeded")
    return {
        type: actionTypes.REPORT_DELETE_SUCCEEDED,
    }
}

export const setActiveModal = (report) => {
    return {
        type: actionTypes.SET_ACTIVE_MODAL,
        report
    }
}

export const setActiveWizardTab = (activeTab) => {
    return {
        type: actionTypes.SET_ACTIVE_WIZARD_TAB,
        activeTab
    }
}

export const resetWizardData = () => {
    return {
        type: actionTypes.RESET_WIZARD_DATA
    }
}