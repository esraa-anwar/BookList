import React from 'react';
import { Link } from "react-router-dom";
import
{
  Navbar,
  Nav,
  NavItem,
  NavbarBrand,
  Container
} from "reactstrap";

export const Heading = () =>
{
  return (
    <Navbar color="dark" dark>
      <Container>
        <NavbarBrand href="/">BookList</NavbarBrand>
        <Nav>
          <NavItem>
            <Link className="btn btn-primary" to="/add">Add Book</Link>
          </NavItem>
        </Nav>

      </Container>
    </Navbar>
  )
}
