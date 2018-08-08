import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import fetchReportsOnMountHOC from '../hoc/fetchReportsOnMountHOC'

import ViewReportsLayoutComponent from '../components/viewReportsComponents/ViewReportsLayoutComponent'
import * as actionCreators from '../actions'

const mapStateToProps = state =>({
    reports: state.reportsReducer,
    activeReportModal: state.activeModalReducer
})

const mapDispatchToProps = dispatch => bindActionCreators(actionCreators, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(fetchReportsOnMountHOC(ViewReportsLayoutComponent))