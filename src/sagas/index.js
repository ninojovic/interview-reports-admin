import { all } from 'redux-saga/effects'
import deleteReportSaga from './deleteReportSaga'
import reportPostSaga from './reportPostSaga';
import fetchDataSaga from './fetchDataSaga';

function* rootSaga(){
    yield all([
        fetchDataSaga(),
        deleteReportSaga(),
        reportPostSaga()
    ])
}

export default rootSaga