import { actionTypes } from '../utils/constants'

export const selectCandidate = (candidateName, candidateId) => {
    return {
        type: actionTypes.CANDIDATE_SELECTED,
        candidateName,
        candidateId
    }
}

export const fetchDataRequest = () => {
    return {
        type: actionTypes.DATA_FETCH_REQUESTED
    }
}

export const fetchDataSucceed = (data) => {
    return {
        type: actionTypes.DATA_FETCH_SUCCEEDED,
        data
    }
}

export const selectCompany = (companyName, companyId) => {
    return {
        type: actionTypes.COMPANY_SELECTED,
        companyId,
        companyName
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

export const selectInterviewDate = (interviewDate) => {
    return {
        type: actionTypes.INTERVIEW_DATE_SELECTED,
        interviewDate
    }
}

export const selectPhase = (phase) => {
    return {
        type: actionTypes.PHASE_SELECTED,
        phase
    }
}

export const selectStatus = (status) => {
    return {
        type: actionTypes.STATUS_SELECTED,
        status
    }
}

export const fillInNotes = (notes) => {
    return {
        type: actionTypes.NOTES_FILLED_IN,
        notes
    }
}

export const reportPostRequested = (wizardData, history) => {
    return {
        type: actionTypes.REPORT_POST_REQUESTED,
        wizardData,
        history
    }
}