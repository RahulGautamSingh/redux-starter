import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Detail from "./Detail";
import HomePage from "./HomePage";

export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route path="/:id" component={Detail} />
      </Switch>
    </Router>
  );
}
