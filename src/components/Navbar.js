import React from "react";

import { Link } from "react-router-dom";

import { Nav, Form, Button, Navbar, FormControl } from "react-bootstrap";

export default function Navbarr() {
  return (
    <Navbar fixed="top" bg="light" expand="lg">
      <Navbar.Brand href="/">Indeed</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/company">
            <Link to="/company">Company</Link>
          </Nav.Link>
          <Nav.Link href="/dashboard">
            <Link to="/dashboard">Dashboard</Link>
          </Nav.Link>
          <Nav.Link href="/candidates">
            <Link to="/candidates">Candidates</Link>
          </Nav.Link>
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-success">Search</Button>
        </Form>
      </Navbar.Collapse>
    </Navbar>
  );
}
