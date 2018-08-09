import { all } from 'redux-saga/effects'
import fetchReportsSaga from './fetchReportsSaga'
import deleteReportSaga from './deleteReportSaga'
import fetchCandidatesSaga from './fetchCandidatesSaga'
import fetchCompaniesSaga from './fetchCompaniesSaga'
import reportPostSaga from './reportPostSaga';

function* rootSaga(){
    yield all([
        fetchReportsSaga(),
        deleteReportSaga(),
        fetchCompaniesSaga(),
        fetchCandidatesSaga(),
        reportPostSaga()
    ])
}

export default rootSaga