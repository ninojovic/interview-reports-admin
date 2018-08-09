import { combineReducers } from 'redux'

import reportsReducer from './reportsReducer'
import activeModalReducer from './activeModalReducer'
import activeWizardTabReducer from './activeWizardTabReducer'
import candidatesReducer from './candidatesReducer'
import companiesReducer from './companiesReducer'
import wizardDataReducer from './wizardDataReducer'

export default combineReducers({
    reportsReducer,
    activeModalReducer,
    activeWizardTabReducer,
    candidatesReducer,
    companiesReducer,
    wizardDataReducer
})