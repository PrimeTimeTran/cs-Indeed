import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";

import { InputGroup, Row, Col, Form, Button, Container } from "react-bootstrap";

import CandidateForm from '../components/CandidateForm'

export default function CandidatePage(props) {
  const [candidate, setCandidate] = useState({});
  const [validated, setValidated] = useState(false);
  useEffect(() => {
    getCandidate();
  }, []);

  const getCandidate = async () => {
    try {
      const response = await fetch(
        `http://localhost:3001/candidates/${props.match.params.id}`
      );
      const data = await response.json();
      setCandidate(data);
    } catch {}
  };

  const updateCandidate = async () => {
    const data = {
      ...candidate
    };
    const config = {
      mode: "cors",
      method: "PUT",
      cache: "no-cache",
      redirect: "follow",
      referrer: "no-referrer",
      credentials: "same-origin",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json"
      }
    };
    try {
      const response = await fetch(
        `http://localhost:3001/candidates/${props.match.params.id}`,
        config
      );
      console.log("id", response);
    } catch (error) {
      console.log("Oops");
    }
  };

  const onSubmit = e => {
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.preventDefault();
      e.stopPropagation();
    }

    setValidated(true);
    updateCandidate();
  };

  return (
    <Container style={{ paddingTop: 100 }}>
      <Helmet>
        <title>
          Editing: {`${candidate.first_name} ${candidate.last_name}`}
        </title>
      </Helmet>
      <Row>
        <Col>
          <img src={candidate.photo_url} />
          <CandidateForm />
        </Col>
      </Row>
    </Container>
  );
}
