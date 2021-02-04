import {connect} from 'react-redux'
import Student from '../components/student/Student'
 
const Students = ({list, history})=>{
    if(list){
        if(list.length)
            return(
                <div className="alert bg-dark">
                    {
                        list.map((student)=>{
                            return <Student key={student.id} studentInfo={student} history={history}/>
                        })
                    }

                </div>
            )
        return <p>Enter a valid student name</p>
        
    }
    return <p>NO AVAILABLE STUDENT </p>
}
const mapStateToProps = (state)=>{
    return {
        list:state.students.list
    }
}
export default connect(mapStateToProps, null)(Students)