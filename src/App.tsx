import React from 'react';
import PersonList from "./components/PersonList"
import { Switch, Route, BrowserRouter as Router} from "react-router-dom";

function App() {
  return (
      <Router>
        <div>
          <Switch>
            <Route path = "/person">
              <PersonList inactive={false}/>
            </Route>
            <Route path="/inactive">
              <PersonList inactive={true}/>
            </Route>
          </Switch>
        </div>
      </Router>
  );
}

export default App;
