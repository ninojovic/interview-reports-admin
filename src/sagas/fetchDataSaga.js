import { call, put, takeLatest, all } from 'redux-saga/effects'
import axios from 'axios'

import { actionTypes, apiEndpoints } from '../utils/constants'

function apiGet(target) {
    return axios.get(apiEndpoints.baseUrl + target)
        .then(response => response.data)
}

function* fetchData() {
    let data = {};

    try {
        const [candidates, companies, reports] = yield all([
            call(apiGet, "candidates"),
            call(apiGet, "companies"),
            call(apiGet, "reports")
        ])

        data = {
            candidates: candidates,
            companies: companies,
            reports: reports
        }

    } catch (e) {
        yield put({ type: actionTypes.DATA_FETCH_FAILED })
        console.log(e)
        return;
    }

    yield put({ type: actionTypes.DATA_FETCH_SUCCEEDED, data })
}

function* fetchDataSaga() {
    yield takeLatest(actionTypes.DATA_FETCH_REQUESTED, fetchData)
}

export default fetchDataSaga