import React, {Component} from "react";
import addStudent from "../actions/addStudent"

// we would like to inform this component from redux.
// to do that, we need some glue. This component / container needs to know 
// about the store so it can use it's state and update if needed. 
// To accomplish this, we use the connect method from react-redux,
// this is our glue!

import {connect} from "react-redux";

// we need bindActionCreators from redux so that we can get the actions 
// to dispatch to the reducers
import {bindActionCreators} from "redux";

class Student extends Component {

    addNewStudent = ()=>{
        const name = document.getElementById("student-name").value;
        this.props.addStudent(name)
    }

    render(){
        console.log(this.props)
        // console.log(this.props.rightSideofRoom)
        const studentList = this.props.rightSideofRoom.map((student, index)=>{
            return(<li key={index}>{student}</li>)
        })
        return(
            <div>
                <h1>Students!</h1>
                <input type="text" id="student-name" placeholder="Student Name"/>
                <button onClick={this.addNewStudent}>Add Student</button>
                <ul>
                    {studentList}
                </ul>
            </div>
        )
    }
}

// we need a function to map the redux state to this components props
// redux state always comes in as PROPS

// console.log(connect)
function mapStateToProps(state){
    // the state param in mapStateToPRops IS THE ROOT REDUCER
    // this function returns an object
    // property will be props in this component and the value will be the piece of state in the reducer
    return{
        rightSideofRoom : state.students
    }
}

// this will make a new prop called addStudent
function mapDispatchToProps(dispatch){
    // bindActionCreators takes an object as first param:
    // property is the local prop name (this.props.aaaaa)
    // value is the callback (the action file.js)
    // 2nd param is teh dispatcher
    return(bindActionCreators(
        {
            addStudent : addStudent
        }, dispatch
        ))
}

// export default student - must not export more than one thing at a time!!!

export default connect(mapStateToProps,mapDispatchToProps)(Student);
