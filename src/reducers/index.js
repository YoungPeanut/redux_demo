import countReducer from "./countReducer.js";
import {combineReducers} from 'redux'
const allReducers = combineReducers({
    count: countReducer
})

export default allReducers