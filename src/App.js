import React from "react";
import logo from "./logo.svg";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.scss";
import AppNavbar from "./components/navbar";
import Home from "./pages/home";
import SingleRoom from "./pages/singleRoom";
import { Route, Switch } from "react-router-dom";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <AppNavbar />

        <Switch>
          <Route path="/" exact component={Home} />
          <Route Path="/singleRoom/:slug" exact component={SingleRoom} />
          <Route component={Home} />
        </Switch>
      </div>
    );
  }
}

export default App;
