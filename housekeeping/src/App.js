import React, { Component } from "react";
import logo from "./logo.svg";
import Header from "./components/headerComponent/header";
import Footer from "./components/footerComponent/footer";
import Homepage from "./components/pages/homepage";
import Login from "./components/auth/Login";
import SignUp from "./components/auth/Register";
import Profile from "./components/auth/profile";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./Assets/css/default.min.css";
class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <Route exact path="/" component={Homepage} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/sign" component={SignUp} />
          <Route exact path="/profile" component={Profile} />
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
