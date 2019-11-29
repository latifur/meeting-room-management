import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.scss";
import AppNavbar from "./components/navbar";
import Home from "./pages/home";
import SingleRoom from "./pages/singleRoom";
import { Switch, Route } from "react-router-dom";

class App extends React.Component {
  render() {
    return (
      <>
        <AppNavbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/details/:slug" exact component={SingleRoom} />
          <Route component={Home} />
        </Switch>
      </>
    );
  }
}

export default App;
