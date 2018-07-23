import React from "react";

// Dependencies
import { Nav, NavItem, NavLink } from "reactstrap";
import axios from "axios";

export default class Sidebar extends React.Component {
  state = { tickets: [] };

  fetchTickets = async () => {
    const url = "http://localhost:7000/api/v1/ticket/all";
    const { data } = await axios.get(url);
    this.setState({ tickets: data.tickets });
  };

  componentDidMount() {
    this.fetchTickets;
  }

  // ticketCount = {tickets.length};
  render() {
    const { history } = this.props;
    return (
      <Nav className="sidebar">
        <NavItem>
          <NavLink onClick={() => history.push("/standard")}>
            <svg viewBox="0 0 30 19" fill="none ">
              <path
                d="M20 7.75C22.2133 7.75 23.9867 6.01917 23.9867 3.875C23.9867 1.73083 22.2133 0 20 0C17.7867 0 16 1.73083 16 3.875C16 6.01917 17.7867 7.75 20 7.75ZM9.33333 7.75C11.5467 7.75 13.32 6.01917 13.32 3.875C13.32 1.73083 11.5467 0 9.33333 0C7.12 0 5.33333 1.73083 5.33333 3.875C5.33333 6.01917 7.12 7.75 9.33333 7.75ZM9.33333 10.3333C6.22667 10.3333 0 11.8446 0 14.8542V18.0833H18.6667V14.8542C18.6667 11.8446 12.44 10.3333 9.33333 10.3333ZM20 10.3333C19.6133 10.3333 19.1733 10.3592 18.7067 10.3979C20.2533 11.4829 21.3333 12.9425 21.3333 14.8542V18.0833H29.3333V14.8542C29.3333 11.8446 23.1067 10.3333 20 10.3333Z"
                transform="translate(0.333374 0.458344)"
                fill="#10549B"
              />
            </svg>
            <p>Standard</p>
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink onClick={() => history.push("/platinum")}>
            <svg viewBox="0 0 30 19" fill="none">
              <path
                d="M20 7.75C22.2133 7.75 23.9867 6.01917 23.9867 3.875C23.9867 1.73083 22.2133 0 20 0C17.7867 0 16 1.73083 16 3.875C16 6.01917 17.7867 7.75 20 7.75ZM9.33333 7.75C11.5467 7.75 13.32 6.01917 13.32 3.875C13.32 1.73083 11.5467 0 9.33333 0C7.12 0 5.33333 1.73083 5.33333 3.875C5.33333 6.01917 7.12 7.75 9.33333 7.75ZM9.33333 10.3333C6.22667 10.3333 0 11.8446 0 14.8542V18.0833H18.6667V14.8542C18.6667 11.8446 12.44 10.3333 9.33333 10.3333ZM20 10.3333C19.6133 10.3333 19.1733 10.3592 18.7067 10.3979C20.2533 11.4829 21.3333 12.9425 21.3333 14.8542V18.0833H29.3333V14.8542C29.3333 11.8446 23.1067 10.3333 20 10.3333Z"
                transform="translate(0.333374 0.458344)"
                fill="#10549B"
              />
            </svg>
            <p>Platinum</p>
          </NavLink>
        </NavItem>
        {/* <div className="time">
          <NavItem>
            <img src={clock} />
            <p> 15 min avg wait time</p>
          </NavItem>
        </div>
        <div>
          <NavItem>
            <img src={blueguests} />
            <p> {ticketCount}people in line</p>
          </NavItem>
        </div> */}
      </Nav>
    );
  }
}
