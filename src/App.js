import Navbar from "./Navbar";
import Home from "./Home";
import { BrowserRouter as Router } from "react-router-dom";
import { Route, Switch } from "react-router-dom/cjs/react-router-dom.min";


function App() {
  //we can create variables and then use it return template(in JSX part)
  // below is return template
  // when we use curly brackets like this React knows that we want to output 
  // a dynamic value or variables

  // React always convert all data(numbers, string or arrays) from variables to a string, except booleans or objects
  return (
    <Router>
      <div className="App">
          <Navbar />
        <div className="content">
          <Switch>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
