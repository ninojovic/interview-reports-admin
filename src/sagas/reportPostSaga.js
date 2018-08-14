import { call, put, takeLatest } from 'redux-saga/effects'
import axios from 'axios'
import { actionTypes, apiEndpoints } from '../utils/constants'

function apiPost(body) {
    return axios.post(apiEndpoints.reports, body)
}

function* postReport(action) {
    try {
        yield call(apiPost, action.wizardData)
        yield put({ type: actionTypes.REPORT_POST_SUCCEEDED })
    } catch (e) {
        yield put({ type: actionTypes.REPORT_POST_FAILED })
        console.log(e)
    }
}

function* reportPostSaga() {
    yield takeLatest(actionTypes.REPORT_POST_REQUESTED, postReport)
}

export default reportPostSaga