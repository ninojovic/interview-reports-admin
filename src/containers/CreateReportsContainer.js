import { connect } from 'react-redux'
import * as actionCreators from '../actions'
import { bindActionCreators } from 'redux'

import fetchDataOnMountHOC from '../hoc/fetchDataOnMountHOC'

import CreateReportsLayoutComponent from '../components/createReportComponents/CreateReportsLayoutComponent'

const mapStateToProps = state => ({
    activeTab: state.activeWizardTabReducer,
    candidates: state.candidatesReducer,
    companies: state.companiesReducer,
    wizardData: state.wizardDataReducer
})

const mapDispatchToProps = dispatch => bindActionCreators(actionCreators, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(fetchDataOnMountHOC(CreateReportsLayoutComponent))