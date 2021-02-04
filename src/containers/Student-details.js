import { useEffect } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import {getStudent, clearStudentDetails, deleteStudet} from '../actions'
const StudentDetails = ({getStudent, clearStudentDetails, deleteStudet, details, match, history})=>{
    const id = match.params.id
    useEffect(()=>{
        getStudent(id)
        return()=>{
            console.log('clean UP')
            clearStudentDetails()
        }
    },[])
    const handleClick = ()=>{
        let sure = window.confirm('Are you sure you want to delete student ?')
        if(sure){
            deleteStudet(id)
            history.push('/')
        }
    }
    const renderStudnetDetails = (details)=>{
        if(details && details.id){
            return(
                <div className="alert alert-dark text-center">
                <h3 >
                    <span>Name : </span>
                    <span>{details.name}</span>
                </h3>
                <h3 >
                    <span>Age : </span>
                    <span>{details.age}</span>
                </h3>
                <h3 >
                    <span>Phone : </span>
                    <span>{details.phone}</span>
                </h3>
                <button type="button" class="btn btn-dark" onClick={handleClick}>Delete</button>
            </div>
            )
            
        }
        return ''
    }
    return(
        <div className="alert alert-light">
            {renderStudnetDetails(details)}
        </div>
    )

}
const mapStateToProps = (state)=>{
    console.log('state insid student-detail', state)
    return{
        details:state.students.details
    }
}

const mapDispatchToProps = (dispatch)=>{
    return bindActionCreators({getStudent, clearStudentDetails, deleteStudet}, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(StudentDetails)