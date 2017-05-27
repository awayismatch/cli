/**
 * Created by John on 2017/5/27.
 */
import {combineReducers} from 'redux'
import reduxShape from 'redux-shape'
import demo from './demo'
const shape = {
    demo:()=>demo,
}
const reducers = reduxShape(combineReducers,{shape:shape})
export default reducers