import { useEffect, useState } from "react"
import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import {addStudent} from '../actions'
export const StudentForm = ({addStudent, history}) => {
    let [student, setStudent] = useState({name:'', age:0, phone:''})
    let [errors, serErrors] = useState({})
    const handleChangeName = (e)=>{
        setStudent({...student, name:e.target.value})
    }
    const handleChangeAge = (e)=>{
        setStudent({...student, age:e.target.value})
    }
    const handleChangePhone = (e)=>{
        setStudent({...student, phone:e.target.value})
    }
    const handleSubmit = async(e)=>{
        e.preventDefault()
        console.log('student to add', student)
       if(handleVlidation()){
        try{
            let response =  await fetch('http://localhost:3004/students', {
                method:'POST',
                body:JSON.stringify(student),
                headers: { 'Content-Type': 'application/json' }
            })
            await response.json()
            history.push('/')
           }
            catch(err){
                console.log(err)
            }
       }

    }
    const handleVlidation = ()=>{
        let isFormValid = true
        let errors = {}
        //name
        if(student.name === ''){
            isFormValid = false
            errors['name'] = 'Can not be empty'

        }
        if(!(student.name.match(/^[a-zA-Z]+$/))){
            isFormValid = false
            errors['name'] = 'only letters'
        }
        //age
        if(!(student.age >= 18 && student.age <= 60 )){
            isFormValid = false
            errors['age'] = 'age must be between 18 and 60';
        }
        //phone
        if(!(student.phone.match(/^(01)[0-9]{9}/))){
            isFormValid = false
            errors['phone'] = 'phone must start with 01 and to be 11 numbers'
        }
        serErrors(errors)
        return isFormValid
    }
    useEffect(()=>{
        renderForm()
    }, [student])
    const renderForm = () => {
        return (
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input type="text" className="form-control" id="name" aria-describedby="emailHelp" 
                    value={student.name} onChange={handleChangeName}/>
                    <small id="emailHelp" className="alert-danger">{errors.name}</small>
                </div>
                <div className="form-group">
                    <label htmlFor="age">Age</label>
                    <input type="number" className="form-control" id="age" 
                    value={student.age} onChange={handleChangeAge} min="0"/>
                    <small id="emailHelp" className="alert-danger">{errors.age}</small>
                </div>
                <div className="form-group">
                    <label htmlFor="phone">Phone</label>
                    <input type="text" className="form-control" id="phone" 
                    value={student.phone} onChange={handleChangePhone}/>
                    <small id="emailHelp" className="alert-danger">{errors.phone}</small>
                </div>
               
                <button type="submit" className="btn btn-primary">Add</button>
            </form>
        )
    }
    return(
        <div className="container">
            {renderForm()}
        </div>
    )
}
const mapDispatchToProps = (dispatch)=>{
    return bindActionCreators({addStudent}, dispatch)
}
export default connect(null, mapDispatchToProps)(StudentForm)