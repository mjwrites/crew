import React from "react";

export default class TicketQueue extends React.Component {
  render() {
    return <h1>Searching for {this.props.ticket}</h1>;
  }
}
