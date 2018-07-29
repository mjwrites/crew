import React from "react";

// Dependencies
import {
  Route,
  BrowserRouter,
  Switch,
  Redirect,
  withRouter
} from "react-router-dom";

// Components
import Nav from "./components/Navbar/Navbar";
import StandardQueue from "./components/Queue/StandardQueue";
import PlatinumQueue from "./components/Queue/PlatinumQueue";

// CSS
import "./public/css/style.css";

const NavWithRouter = withRouter(Nav);

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <BrowserRouter>
          <React.Fragment>
            <NavWithRouter />
            <div className="main">
              <Switch>
                <Route
                  exact
                  path="/"
                  render={() => <Redirect to="/standard" />}
                />
                <Route exact path="/standard" component={StandardQueue} />
                <Route exact path="/platinum" component={PlatinumQueue} />
              </Switch>
            </div>
          </React.Fragment>
        </BrowserRouter>
      </React.Fragment>
    );
  }
}

export default App;
