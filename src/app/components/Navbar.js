import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';

export default class NavBar extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
        <Navbar color="dark" dark expand="md" fixed='top' container='md'>
          <NavbarBrand href="/">De Boeck Stef</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="#">About me</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#">Projects</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#">Contact me</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
      
    );
  }
}