// this is our MASTER REDUCER
// this is our state
// it imports all of the little reducers

// master reducer manifesto: I, the master reducer, neither know
// nor give a rip about React.

import {combineReducers} from "redux";

// so we need a reducer to give to the master reducer

import StudentReducer from "./StudentReducer";

// console.log(combineReducers)
// console.log(StudentReducer)

// build the root reducer with combineReducers
// we got combineReducers from redux
// combineReducer takes 1 arg: an object!!!
// with properties of whatever state should be called and a value of the reducer

const rootReducer = combineReducers({
    // the name of the state will be the prop used by react
    // and the value will be the reducer file
    students : StudentReducer
})
console.log("combineReducers just ran")
console.log(rootReducer)
export default rootReducer;