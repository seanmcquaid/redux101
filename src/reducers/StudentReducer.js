const students = [
    "stantley",
    "kyle",
    "Rob",
    "Ron",
    "JR",
    "Matt"
]

// All reducer functions have 2 params 
// 1. current state
// 1b. usually you will want to provide a default state
// 2. Info that came from the action
export default function(state = students, action){
    if(action.type === "ADD_STUDENT"){
        // this means I care about this action. update
        // making a fresh copy of the array
        let newStudents = state.slice();
        newStudents.push(action.payload);
        return(newStudents);
    } else{
        return(state);
    }
}