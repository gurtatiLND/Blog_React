import Navbar from "./Navbar";
import Home from "./Home";

function App() {
  //we can create variables and then use it return template(in JSX part)
  // below is return template
  // when we use curly brackets like this React knows that we want to output 
  // a dynamic value or variables

  // React always convert all data(numbers, string or arrays) from variables to a string, except booleans or objects
  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <Home />
      </div>
    </div>
  );
}

export default App;
