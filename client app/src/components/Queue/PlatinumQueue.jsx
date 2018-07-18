import React from "react";

//Dependencies
import axios from "axios";

export default class PlatinumQueue extends React.Component {
  // Component state
  // setting tickets to be initially
  state = { tickets: [] };

  componentDidMount() {
    this.fetchTickets();
  }

  // Get tickets from API
  // Store them in state
  fetchTickets = async () => {
    const url = "http://localhost:7000/api/v1/ticket/all";

    // Object assign and extraction
    const { data } = await axios.get(url);

    try {
      if (data.success) {
        this.setState({ tickets: data.tickets });
      } else {
        alert(data.message);
      }
    } catch (e) {
      alert(e.message);
    }
  };

  // Render a view for our tickets
  // .map will loop through array
  renderTickets = tickets =>
    tickets.map((ticket, index) => {
      return (
        <div className="tickets" key={index}>
          <p>First Name: {ticket.firstName} </p>
          <p> Last Name: {ticket.lastName} </p>
          <p> folio: {ticket.folio} </p>
          <p> ticketNumber: {ticket.ticket} </p>
          <p> issue: {ticket.issue} </p>
        </div>
      );
    });

  render() {
    // Extract tickets from state
    const { tickets } = this.state;
    return (
      // if (tickets.length > 0){ render X}
      // else render Y
      // is equivilant to
      // ticket.length > 0 ? render X : render Y
      <React.Fragment>
        {tickets.length > 0 ? (
          this.renderTickets(tickets)
        ) : (
          <p>No tickets available</p>
        )}
      </React.Fragment>
    );
  }
}
