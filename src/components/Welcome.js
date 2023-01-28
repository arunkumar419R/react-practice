import React from "react";

class Welcome extends React.Component {
  render() {
    return (
      <h3>
        Welcome {this.props.name} city {this.props.city}
      </h3>
    );
  }
}

export default Welcome;
