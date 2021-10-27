import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";

function Container(){
    return (
        <>
        <Router>
            <ul>
                <li>
                    <Link to="login">Login</Link>
                </li>
            </ul>
        </Router>
        <Switch>
            <Route><Login /></Route>
        </Switch>
        </>
    );
};

export default Container;