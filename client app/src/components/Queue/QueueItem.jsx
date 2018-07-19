import React from "react";

export default class QueueItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: " ",
      lastName: " ",
      folio: " ",
      ticketNumber: " ",
      issue: " "
    };
  }
  componentWillMount() {
    this.setState({
      firstName: this.props.firstName,
      lastName: this.props.lastName,
      folio: this.props.folio,
      ticketNumber: this.props.ticketNumber,
      issue: this.props.issue
    });
  }
  render() {
    return <h1>Searching for {this.state.firstName}</h1>;
  }
}
