import { useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const Create = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('Antonio');
    const [isPending, setIsPending] = useState(false);
    const history = useHistory(); // using this hook to go through the history

    const handleSubmit = (e) => {
        e.preventDefault(); // that's help not to reload page again
        const blog = { title, body, author };

        setIsPending(true);
        
        //adding a new blog to the db.json file
        fetch('http://localhost:8000/blogs', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(blog)
        }).then(() => {
            console.log('new blog added');
            setIsPending(false);
            history.push('/'); // use push method to redirect to the HOME page when blog is added
        })
    }

    return (
        <div className="create">
           <h2>Add a new Blog</h2>
           <form onSubmit={handleSubmit}>
              <label>Blog title:</label>
              <input 
                type='text'
                required
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
              <label>Blog body:</label>
              <textarea
                required
                value={body}
                onChange={(e) => setBody(e.target.value)}
              ></textarea>
              <label>Blog author:</label>
              <select
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
              >
                <option value="antonio">Gardener Antonio</option>
                <option value="luigi">Gardener Luigi</option>
              </select>
              { !isPending && <button>Add Blog</button> }
              { isPending && <button disabled>Adding blog...</button> }
           </form>
        </div>
    );
}
 
export default Create;