import { call, put, takeLatest } from 'redux-saga/effects'
import axios from 'axios'
import { actionTypes, apiEndpoints } from '../utils/constants'

function apiDelete(id) {
    return axios.delete(apiEndpoints.reports + id)
}

function* deleteReport(action) {
    try {
        yield call(apiDelete, action.id)
        yield put({ type: actionTypes.REPORT_DELETE_SUCCEEDED })
    } catch (e) {

    }
    yield put({ type: actionTypes.REPORTS_FETCH_REQUESTED })
}

function* deleteReportSaga() {
    yield takeLatest(actionTypes.REPORT_DELETE_REQUESTED, deleteReport)
}

export default deleteReportSaga