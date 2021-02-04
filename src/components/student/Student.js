const Student = ({studentInfo, history})=>{
    const handleClick = ()=>{
        history.push(`/students/${studentInfo.id}`)
    }

    if(studentInfo){
        return(
            <div className="alert alert-dark d-flex justify-content-center" onClick={handleClick}>
                <h3 className="align-self-center">{studentInfo.name}</h3>
            </div>
        )
    }
}
export default Student