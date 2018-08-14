import { call, put, takeLatest } from 'redux-saga/effects'
import axios from 'axios'
import { actionTypes, apiEndpoints } from '../utils/constants'

function apiFetch(){
    return axios.get(apiEndpoints.candidates)
        .then(response => response.data)
}

function* fetchCandidates() {
    try {
        const candidates = yield call(apiFetch)
        yield put({type: actionTypes.CANDIDATES_FETCH_SUCCEEDED, candidates})
    } catch (e) {
        yield put({type: actionTypes.CANDIDATES_FETCH_FAILED})
        console.log(e)
    }
}

function* fetchCandidatesSaga(){
    yield takeLatest(actionTypes.CANDIDATES_FETCH_REQUESTED, fetchCandidates)
}

export default fetchCandidatesSaga