import { connect } from 'react-redux'
import * as actionCreators from '../actions'
import { bindActionCreators } from 'redux'

import fetchCandidatesOnMountHOC from '../hoc/fetchCandidatesOnMountHOC'

import CreateReportsLayoutComponent from '../components/createReportComponents/CreateReportsLayoutComponent'

const mapStateToProps = state => ({
    activeTab: state.activeWizardTabReducer,
    candidates: state.candidatesReducer,
    wizardData: state.wizardDataReducer
})

const mapDispatchToProps = dispatch => bindActionCreators(actionCreators, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(fetchCandidatesOnMountHOC(CreateReportsLayoutComponent))