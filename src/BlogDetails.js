import { useHistory, useParams } from "react-router-dom/cjs/react-router-dom.min";
import useFetch from "./useFetch";


const BlogDetails = () => {
    {/* useParams allow us to grad parameters or route parameters from the routes */}
    const { id } = useParams();
    const { data: blog, error, isPending } = useFetch('http://localhost:8000/blogs/' + id);
    const history = useHistory();

    //using this function to delete blog from db.json throug the DELEE method
    const handleClick = () => {
        fetch('http://localhost:8000/blogs/' + blog.id, {
            method: 'DELETE'
        }).then(() => {
            history.push('/'); // and add the history hook to reditect to the HOME page
        })
    }

    return (
        <div className="blog-details">
            { isPending && <div>Loading ...</div> }
            { error && <div>{ error }</div> }
            { blog && 
              <article>
                 <h2>{ blog.title }</h2>
                 <p>Written by { blog.author}</p>
                 <div>{ blog.body }</div> 
                 <button onClick={handleClick}>Delete</button>
              </article> }      
        </div>
    );
}
 
export default BlogDetails;