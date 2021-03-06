import React from "react";

import { Container, Row, Col, Button } from "reactstrap";
import { withRouter } from "react-router-dom";

//Dependencies
import axios from "axios";

// Components
import Sidebar from "../Sidebar/Sidebar";
let SidebarWithRouter = withRouter(Sidebar);

export default class StandardQueue extends React.Component {
  completeTicket = async ticket => {
    const url = "http://18.191.230.214:7000/api/v1/ticket/complete";
    const update = await axios.put(url, { ticket: ticket });
    this.fetchTickets();
  };
  // Component state
  // setting tickets to be initially
  state = { tickets: [] };

  componentDidMount() {
    this.fetchTickets();
  }

  // Get tickets from API
  // Store them in state
  fetchTickets = async () => {
    const url = "http://18.191.230.214:7000/api/v1/ticket/standard";

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
      if (ticket.active == "true") {
        return (
          <div className="ticket" key={ticket.ticket}>
            <Row>
              <Col xs="2">
                <span>
                  <b># {index + 1}</b>
                </span>
              </Col>
              <Col xs="2">
                <img src={ticket.photo} alt="Guest photo" />
              </Col>
              <Col xs="2">
                <span className="name">
                  {ticket.firstName} {ticket.lastName}
                </span>
              </Col>
              {/* <span className="folio">{ticket.folio}</span> */}
              {/* <span className="ticketNumber">{ticket.ticket}</span> */}
              <Col xs="4">
                <span className="issue">
                  <b>Reason for visit:</b> {ticket.issue}
                </span>
              </Col>
              <Col xs="2">
                <span className="completed">
                  <Button onClick={() => this.completeTicket(ticket)}>
                    COMPLETED
                  </Button>
                </span>
              </Col>
            </Row>
          </div>
        );
      }
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
        <SidebarWithRouter ticketCount={tickets.length} />
        {tickets.length > 0 ? (
          this.renderTickets(tickets)
        ) : (
          <p>No tickets available</p>
        )}
      </React.Fragment>
    );
  }
}
