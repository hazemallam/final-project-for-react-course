const baseURL = 'http://localhost:3004/students'

export const getStudents = async (letters)=>{
    let payload
    let temp
    try{

        let response = await fetch(`${baseURL}`,{method:'GET'})
        
        if(letters === ''){
            payload = await response.json()
        }
        else{
            temp = await response.json()
            payload = temp.filter((student)=>{
                return student.name.toLowerCase().includes(letters.toLowerCase())
            })
        }
    }
    catch(err){
        console.log(err)
    }
    return{
        type:'STUDENTS_LIST',
        payload 
    }
}

export const getStudent = async(id)=>{
    let payload
    try{
        let response = await fetch(`${baseURL}/${id}`,{method:'GET'})
        payload = await response.json()
        console.log('single student', payload)
    }
    catch(err){
        console.log(err)
    }
    return{
        type:'STUDENT_DETAILS',
        payload
    }
}

export const deleteStudet = async(id)=>{
    let payload
    try{
        let response = await fetch(`${baseURL}/${id}`, {method:'DELETE'})
        payload = await response.json()
        console.log('inside delete', payload)
    }
    catch(err){
        console.log(err)
    }
    return{
        type:'DELETE_STUDENT',
        payload
    }
}

export const addStudent = async(student)=>{
    let payload
    try{
        let response = await fetch(`${baseURL}`, {
            method:'POST',
            body:student
        })
        payload = await response.json()
        console.log('payload inside add student ', payload)
    }
    catch(err){
        console.log(err)
    }
    return{
        type:'ADD_STUDENT',
        payload
    }
}

export const clearStudentDetails = ()=>{
    return{
        type:'CLEAR_STUDENT_DETAILS',
        payload:null
    }
}