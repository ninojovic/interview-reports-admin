import { call, put, takeLatest } from 'redux-saga/effects'
import axios from 'axios'
import { actionTypes, apiEndpoints } from '../utils/constants'

function apiFetch(){
    return axios.get(apiEndpoints.companies)
        .then(response => response.data)
}

function* fetchCompanies() {
    try {
        const companies = yield call(apiFetch)
        yield put({type: actionTypes.COMPANIES_FETCH_SUCCEEDED, companies})
    } catch (e) {
        yield put({type: actionTypes.COMPANIES_FETCH_FAILED})
        console.log(e)
    }
}

function* fetchCompaniesSaga(){
    yield takeLatest(actionTypes.COMPANIES_FETCH_REQUESTED, fetchCompanies)
}

export default fetchCompaniesSaga