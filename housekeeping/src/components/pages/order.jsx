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
  handlezipCodeChange = event => {
    this.setState({
      zipCode: event.target.value
    });
  };
  render() {
    return (
      <body>
        <div className="orderAction">
          <div className="form-1">
            <form>
              <h2>Cleaning Job Address</h2>
              <div className="form-group">
                <label for="address">Address:</label>
                <input
                  type="text"
                  placeholder="Address"
                  value={this.state.address}
                  onChange={this.handleAddressChange}
                />
              </div>
              <div className="form-group">
                <label for="zipCode">Zip Code:</label>
                <input
                  type="text"
                  placeholder="Zip Code"
                  value={this.state.zipCode}
                  onChange={this.handlezipCodeChange}
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
