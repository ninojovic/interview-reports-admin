import { call, put, takeLatest } from 'redux-saga/effects'
import axios from 'axios'
import { actionTypes, apiEndpoints } from '../utils/constants'

function apiFetch() {
    return axios.get(apiEndpoints.reports)
        .then(response => response.data)
}

function* fetchReports() {
    try {
        const reports = yield call(apiFetch)
        yield put({ type: actionTypes.REPORTS_FETCH_SUCCEEDED, reports })
    } catch (e) {
        yield put({ type: actionTypes.REPORTS_FETCH_FAILED })
        console.log(e)
    }
}

function* fetchReportsSaga() {
    yield takeLatest(actionTypes.REPORTS_FETCH_REQUESTED, fetchReports)
}

export default fetchReportsSaga