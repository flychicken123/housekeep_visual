import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
class Homepage extends Component {
  render() {
    return (
      <body>
        <div className="slide">
          <div className="title1">
            <h1>Clean Your House with Best Price</h1>
            <div className="homeAction">
              <Link to="/order">
                <button className="btn btn-outline-light btn-lg">
                  Order Now
                </button>
              </Link>
              <Link to="/job">
                <button className="btn btn-outline-light btn-lg">
                  Find Work
                </button>
              </Link>
            </div>
          </div>
        </div>
      </body>
    );
  }
}
export default Homepage;
