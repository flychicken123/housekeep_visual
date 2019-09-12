import React, { Component } from "react";
class Homepage extends Component {
  render() {
    return (
      <body>
        <div class="container">
          <div class="image">
            <img src={require("../../Assets/images/001.jpg")} />
            <button class="btn">Button</button>
          </div>
        </div>
      </body>
    );
  }
}
export default Homepage;
