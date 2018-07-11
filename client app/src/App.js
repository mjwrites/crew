import React from "react";

// Components
import Nav from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";
import StandardQueue from "./components/Queue/StandardQueue";
import PlatinumQueue from "./components/Queue/PlatinumQueue";
import TicketQueue from "./components/Queue/TicketQueue";

// CSS
import "./public/css/style.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      queue: "Standard"
    };
  }

  // Will display current queue view
  renderQueue = queue => {
    if (queue === "Platinum") {
      return <PlatinumQueue />;
    } else if (queue === "Standard") {
      return <StandardQueue />;
    } else {
      return <TicketQueue ticket={this.state.queue} />;
    }
  };

  render() {
    return (
      <React.Fragment>
        <Nav setQueue={ticket => this.setState({ queue: ticket })} />
        <div className="main">
          <Sidebar
            setQueue={currentQueue => this.setState({ queue: currentQueue })}
          />

          {/* Calling a function to renderr my queue, passing in the current state */}
          <div className="queue">{this.renderQueue(this.state.queue)}</div>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
