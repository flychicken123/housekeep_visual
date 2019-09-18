import React, { Component } from "react";
import "../../Assets/css/order.min.css";
class Order extends Component {
  constructor(props) {
    super(props);
    this.state = {
      address: "",
      zipCode: ""
    };
  }
  handleAddressChange = event => {
    this.setState({
      address: event.target.value
    });
  };
  render() {
    return (
      <body>
        <div className="orderAction">
          <div className="register_form">
            <form className="form">
              <div className="form-group">
                <label>Address:</label>
                <input
                  type="text"
                  placeholder="Address"
                  value={this.state.address}
                  onChange={this.handleAddressChange}
                />
              </div>
            </form>
          </div>
        </div>
      </body>
    );
  }
}
export default Order;
