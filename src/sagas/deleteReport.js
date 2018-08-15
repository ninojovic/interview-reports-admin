import { call, put } from 'redux-saga/effects'
import axios from 'axios'
import { actionTypes, apiEndpoints } from '../utils/constants'

function apiDelete(id) {
    return axios.delete(apiEndpoints.reports + id)
}

function* deleteReport(action) {
    try {
        yield call(apiDelete, action.id)
        yield put({ type: actionTypes.REPORT_DELETE_SUCCEEDED })
        yield put({ type: actionTypes.DATA_FETCH_REQUESTED })
    } catch (e) {
        yield put({ type: actionTypes.REPORT_DELETE_FAILED })
        console.log(e)
    }
}

export default deleteReport