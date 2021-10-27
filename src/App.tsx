import React from 'react';
import PersonList from "./components/PersonList"
import { Switch, Route, BrowserRouter as Router, Link} from "react-router-dom";

function App() {
  return (
      <Router>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/person">Page 1</Link>
            </li>
            <li>
              <Link to="/inactive">Page 2</Link>
            </li>
          </ul>
        </nav>
          <Switch>
            <Route path = "/person">
              <PersonList inactive={false}/>
            </Route>
            <Route path="/inactive">
              <PersonList inactive={true}/>
            </Route>
          </Switch>
      </Router>
  );
}

export default App;
