import { Link } from "react-router-dom/cjs/react-router-dom.min";

const NotFound = () => {
    return (
        <div className="not_found">
            <h2>Sorry...</h2>
            <p>This page doesn't exist.</p>
            <Link to='/'>Go back to the home page...</Link>
        </div>
    );
}
 
export default NotFound;