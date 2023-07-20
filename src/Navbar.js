import { Link } from "react-router-dom";

const Navbar = () => {
    return ( 
        <nav className="navbar">
            <h1>Sustainable Gardeners</h1>
            <div className="links">
                <Link to="/">Garden's blog</Link>
                <Link to="/create">New blog</Link>
            </div>
        </nav>
     );
}
 
export default Navbar;