import React from "react";

import { Nav, Form, Button, Navbar, FormControl } from "react-bootstrap";

import { Link } from "react-router-dom";

export default function Navbarr() {
  return (
    <Navbar fixed="top" bg="light" expand="lg">
      <Navbar.Brand href="/">Indeed</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Link to="/company" className="nav-link">
            Home
          </Link>
          <Link to="/dashboard" className="nav-link">
            Dashboard
          </Link>
          <Link to="/candidates" className="nav-link">
            Candidates
          </Link>
          <Link to="/candidates/new" className="nav-link">
            New Candidate
          </Link>
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-success">Search</Button>
        </Form>
      </Navbar.Collapse>
    </Navbar>
  );
}
