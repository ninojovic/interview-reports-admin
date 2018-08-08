import { actionTypes, wizardTabs } from '../utils/constants'

const activeWizardTabReducer = (state = wizardTabs.CANDIDATE_TAB, action) => {
    switch (action.type) {
        case actionTypes.SET_ACTIVE_WIZARD_TAB:
            return action.activeTab
        default:
            return state;
    }
}

export default activeWizardTabReducer