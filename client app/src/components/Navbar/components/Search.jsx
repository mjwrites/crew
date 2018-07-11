import React from "react";

// Dependencies
import axios from "axios";
import { Input, InputGroup, InputGroupAddon, Form, Button } from "reactstrap";

export default class Search extends React.Component {
  // Create a binded function
  searchTicket = e => {
    // remove default behavior by event emitter
    e.preventDefault();

    // extract information from out Form component
    const data = new FormData(e.target);

    // Retrieve ticket by "name" from our InputGroup
    const ticket = data.get("ticket");

    this.props.setQueue(ticket);
    // Pass ticket info to DB
    // Make a request for a ticket given a ticket #
    // Ex fetch route: http://localhost:8080/ticket?ticket="12345"
    axios
      .get(`https://jsonplaceholder.typicode.com/comments?postId=${ticket}`)
      .then(response => console.log(response))
      .catch(error => console.log(error));
  };

  render() {
    return (
      <Form onSubmit={this.searchTicket}>
        <InputGroup>
          <Input type="text" placeholder="Search ticket" name="ticket" />
          <InputGroupAddon addonType="append">
            <Button>
              <svg
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.5 11H11.71L11.43 10.73C12.41 9.59 13 8.11 13 6.5C13 2.91 10.09 0 6.5 0C2.91 0 0 2.91 0 6.5C0 10.09 2.91 13 6.5 13C8.11 13 9.59 12.41 10.73 11.43L11 11.71V12.5L16 17.49L17.49 16L12.5 11ZM6.5 11C4.01 11 2 8.99 2 6.5C2 4.01 4.01 2 6.5 2C8.99 2 11 4.01 11 6.5C11 8.99 8.99 11 6.5 11Z"
                  fill="#7F6F6F"
                />
              </svg>
            </Button>
          </InputGroupAddon>
        </InputGroup>
      </Form>
    );
  }
}
