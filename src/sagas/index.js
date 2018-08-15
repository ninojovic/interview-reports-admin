import { takeLatest } from 'redux-saga/effects'
import { actionTypes } from '../utils/constants'
import deleteReport from './deleteReport'
import postReport from './postReport';
import fetchData from './fetchData';

function* rootSaga(){
    yield takeLatest(actionTypes.DATA_FETCH_REQUESTED, fetchData)
    yield takeLatest(actionTypes.REPORT_DELETE_REQUESTED, deleteReport)
    yield takeLatest(actionTypes.REPORT_POST_REQUESTED, postReport)
}

export default rootSaga