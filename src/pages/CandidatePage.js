import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";

import { Row, Col, Container } from "react-bootstrap";

import CandidateForm from "../components/CandidateForm";

export default function CandidatePage(props) {
  const [candidate, setCandidate] = useState({});
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

  return (
    <Container style={{ paddingTop: 100 }}>
      <Helmet>
        <title>{`${candidate.first_name} ${candidate.last_name}`}</title>
      </Helmet>
      <Row>
        <Col>
          <CandidateForm candidate={candidate} />
        </Col>
      </Row>
    </Container>
  );
}
