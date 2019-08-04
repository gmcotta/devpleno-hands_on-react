import React, {useState} from 'react';
import {Navbar, NavbarBrand, Collapse, Nav, NavItem, NavLink, NavbarToggler} from 'reactstrap';
import {Link} from 'react-router-dom';

const Header = () => {
  const [open, setOpen] = useState(false);
  const toggle = () => {
    setOpen(!open);
  };
  return (
    <Navbar color = "light" light expand = "md">
      <div className = "container">
        <NavbarBrand tag = {Link} to = '/'>Minhas Séries</NavbarBrand>
        <NavbarToggler onClick = {toggle} />
        <Collapse isOpen = {open} navbar>
          <Nav className = 'ml-auto'>
            <NavItem>
              <NavLink tag={Link} to = '/generos'>Gêneros</NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={Link} to = '/series'>Séries</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </div>
    </Navbar>
  );
};

export default Header;