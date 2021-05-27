import { useEffect } from "react";
import { connect } from "react-redux";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { getUserAuth } from "./actions";

import "./App.css";
import Home from "./pages/Home";
import Login from "./pages/Login";

function App(props) {
  useEffect(() => {
    props.getUserAuth();
  }, []);

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Login />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
        </Switch>
      </Router>{" "}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => ({
  getUserAuth: () => dispatch(getUserAuth()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
