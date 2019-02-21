// an action exports a function
// the function, must return an object
// that object must have a prop of type

function addStudent(studentName){
    console.log("add student action was called...")
    return {
        type : "ADD_STUDENT",
        payload : studentName
    }
}

export default addStudent;