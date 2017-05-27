/**
 * Created by John on 2017/5/27.
 */
import {put,throttle,takeEvery,select,call} from 'redux-saga/effects'
import {delay} from 'redux-saga'

function * onInit(){
    yield call(delay,1000)
    yield put({type:'demo.increase'})
}

export default function *(){
    yield takeEvery('demo.init',onInit)
}