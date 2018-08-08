import { all } from 'redux-saga/effects'
import fetchReportsSaga from './fetchReportsSaga'
import deleteReportSaga from './deleteReportSaga'
import fetchCandidatesSaga from './fetchCandidatesSaga';

function* rootSaga(){
    yield all([
        fetchReportsSaga(),
        deleteReportSaga(),
        fetchCandidatesSaga()
    ])
}

export default rootSaga