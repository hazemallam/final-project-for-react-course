import { useEffect, useState } from "react"
import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import {getStudents} from '../actions'
const Search = ({getStudents})=>{
    let [searchLetters, setSearchLetters] = useState('')
    const handleChange = (e)=>{
        setSearchLetters(e.target.value)
        console.log('search letters', e.target.value)
    }
    useEffect(() => {
       async function fetchData(){
        
          getStudents(searchLetters)
       }
       fetchData()
    },[searchLetters])
    return <div className="col text-center">
        <div className="form-group">
            <input className="form-control rounded-pill text-center" type="text" placeholder="Enter Name"
            value={searchLetters} onChange={handleChange} />
        </div>
    </div>

}
const mapDispatchToProps = (dispatch)=>{
    return bindActionCreators({getStudents}, dispatch)

}
export default connect(null, mapDispatchToProps)(Search)
