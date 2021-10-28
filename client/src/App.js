import "./App.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import NewQuotes from "./NewQuotes";
import ViewQuotes from "./ViewQuotes";
import ViewIndividualQuotes from "./ViewIndividualQuotes";

function App() {
  return (
    <Router>
      <Route exact path="/add" component={NewQuotes} />
      <Route exact path="/view" component={ViewQuotes} />
      <Route exact path="/fullscreen" component={ViewIndividualQuotes} />
      <div className="App">
        <Link to="/add">
          <button>Add a Quote</button>
        </Link>
        <Link to="/view">
          <button>View a Quote</button>
        </Link>
      </div>
    </Router>
  );
}

export default App;
