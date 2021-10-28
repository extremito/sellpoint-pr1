import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import Login from "../Login/Login";

function Container() {
  return (
    <>
      <Router>
        <ul>
          <li>
            <Link to="login">Login</Link>
          </li>
        </ul>
        <Switch>
          <Route>
            <Login />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default Container;
