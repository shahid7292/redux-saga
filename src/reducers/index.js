import  counterReducer from './counter'
import loggedReducer from './islogged'
import clickReducer from './click'
import dataReducer from './data'
import {combineReducers} from 'redux'

const allReducers=combineReducers({
    counter:counterReducer,
    isLogged:loggedReducer,
    click:clickReducer,
    posts:dataReducer
})
export default allReducers;