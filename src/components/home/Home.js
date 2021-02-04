import Search from "../../containers/Search"
import Students from "../../containers/Students-list"




const Home = ({history})=>{
    return(
        <div>
            <h2 className="text-white bg-dark text-center">Students</h2>
            <Search/>
            <Students history={history}/>
        </div>
    )
}
export default Home