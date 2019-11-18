import React, { Component } from "react";

export default class singleRoom extends Component {
  constructor(props) {
    super(props);
    this.state = {
      slug: this.props
    };
  }
  render() {
    return <div>{console.log(this.state.slug)}</div>;
  }
}
