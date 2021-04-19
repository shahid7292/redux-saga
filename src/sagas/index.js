import {takeEvery,call, put} from 'redux-saga/effects'
import requestPost from '../requests/posts'

function* clickAsync(){
   yield put({type:"INCREAMENT_CLICK_ASYNC"});
   const response=yield call(requestPost)
   yield put({type:"SET_DATA",payload:response.data})
}

function* watchClick(){
    yield takeEvery("INCREAMENT_CLICK",clickAsync)
}

export default watchClick