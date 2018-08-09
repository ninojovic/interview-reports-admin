import { actionTypes } from '../utils/constants'

export const fetchReportsSucceed = (reports) => {
    return {
        type: actionTypes.REPORTS_FETCH_SUCCEEDED,
        reports
    }
}

export const fetchReportsRequest = () => {
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

export const selectCompany = (companyName, companyId) => {
    return {
        type: actionTypes.COMPANY_SELECTED,
        companyId,
        companyName
    }
}

export const fetchCompaniesRequest = () => {
    return {
        type: actionTypes.COMPANIES_FETCH_REQUESTED
    }
}

export const fetchCompaniesSucceed = (companies) => {
    return {
        type: actionTypes.COMPANIES_FETCH_SUCCEEDED,
        companies
    }
}

export const deleteRequest = (id) => {
    return {
        type: actionTypes.REPORT_DELETE_REQUESTED,
        id
    }
}

export const deleteSucceed = (id) => {
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

export const isReadyForPost = (readyStatus) => {
    return {
        type: actionTypes.IS_READY_FOR_POST,
        readyStatus
    }
}

export const detailsFilledIn = (interviewDate, phase, status, notes) => {
    return {
        type: actionTypes.DETAILS_FILLED_IN,
        interviewDate,
        phase,
        status,
        notes
    }
}

export const reportPostRequested = (wizardData) => {
    return {
        type: actionTypes.REPORT_POST_REQUESTED,
        wizardData
    }
}