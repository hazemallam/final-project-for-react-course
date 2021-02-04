import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link to='/' className="navbar-brand">Home</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse al" id="navbarNavDropdown">
                <ul className="navbar-nav">
                    <li className="nav-item active text-right">
                        <Link to='/addstudent' className="nav-link">Add Student <span className="sr-only">(current)</span></Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}
export default NavBar;