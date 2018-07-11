import React from "react";

//Dependency
import { Navbar, NavbarBrand } from "reactstrap";

// Images
import carnivalNavLogo from "../../public/images/carnivalNavLogo.png";

// Components
import Search from "./components/Search";

export default class Nav extends React.Component {
  render() {
    return (
      <Navbar expand="md">
        <NavbarBrand href="/">
          <img src={carnivalNavLogo} />
        </NavbarBrand>
        <h2>GUEST SERVICES</h2>
        <Search setQueue={ticket => this.props.setQueue(ticket)} />
      </Navbar>
    );
  }
}
