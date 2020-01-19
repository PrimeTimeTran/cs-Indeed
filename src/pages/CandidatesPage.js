import React, { useState, useEffect } from "react";

import {
  faMap,
  faEdit,
  faTrash,
  faUserMd,
  faMapPin,
  faEnvelope,
  faVenusMars,
  faBriefcase
} from "@fortawesome/free-solid-svg-icons";

import {
  Row,
  Col,
  Card,
  Spinner,
  ListGroup,
  Container,
  ListGroupItem
} from "react-bootstrap";

import { Helmet } from "react-helmet";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const getImageUrl = candidate => {
  const gender = candidate.gender === "Male" ? "men" : "women";
  const num = (Math.random() * 75).toFixed();
  return `https://randomuser.me/api/portraits/${gender}/${num}.jpg`;
};

export default function CandidatesPage() {
  const [candidates, setCandidates] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getCandidates = async () => {
      try {
        const response = await fetch("http://localhost:3001/candidates");
        const data = await response.json();
        setCandidates(data);
        setLoading(false);
      } catch (error) {
        const bgCandidates = require("../candidates.json");
        console.log("bgCandidates", bgCandidates.candidates);
        setCandidates(bgCandidates.candidates);
        setLoading(false);
        console.log("Oops");
      }
    };
    getCandidates();
  }, []);

  const onDeleteCandidate = id => {
    try {
      const config = { method: "DELETE" };
      fetch(`http://localhost:3001/candidates/${id}`, config);
      const newCandidates = candidates.filter(candidate => candidate.id !== id);
      setCandidates(newCandidates);
    } catch (error) {
      console.log("Error: ", error);
    }
  };

  if (loading) {
    return (
      <Container
        fluid
        style={{ paddingTop: 100, height: "100vh" }}
        className="d-flex justify-content-center align-items-center"
      >
        <Row>
          <Spinner variant="primary" animation="grow" role="status">
            <span className="sr-only">Loading...</span>
          </Spinner>
        </Row>
      </Container>
    );
  }

  return (
    <Container fluid style={{ paddingTop: 100 }}>
      <Helmet>
        <title>Candidates</title>
      </Helmet>
      <Row>
        {candidates.map(candidate => {
          return (
            <Col lg="3" key={candidate.id}>
              <Card>
                <Card.Img variant="top" src={candidate.photo_url} />
                <Card.Body>
                  <Card.Title>
                    {candidate.first_name + " " + candidate.last_name}
                  </Card.Title>
                  <Card.Text>{candidate.id}</Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                  <ListGroupItem>
                    <FontAwesomeIcon icon={faBriefcase} /> {candidate.company}
                  </ListGroupItem>
                  <ListGroupItem>
                    <FontAwesomeIcon icon={faUserMd} /> {candidate.job_title}
                  </ListGroupItem>
                  <ListGroupItem>
                    <FontAwesomeIcon icon={faVenusMars} /> {candidate.gender}
                  </ListGroupItem>
                  <ListGroupItem>
                    <FontAwesomeIcon icon={faMapPin} /> {candidate.city}
                  </ListGroupItem>
                  <ListGroupItem>
                    <FontAwesomeIcon icon={faMap} /> {candidate.country}
                  </ListGroupItem>
                  <ListGroupItem>
                    <FontAwesomeIcon icon={faEnvelope} /> {candidate.email}
                  </ListGroupItem>
                </ListGroup>
                <Card.Body>
                  <Card.Link onClick={() => onDeleteCandidate(candidate.id)}>
                    <FontAwesomeIcon icon={faTrash} /> Remove
                  </Card.Link>
                  <Card.Link href={`/candidates/${candidate.id}`}>
                    <FontAwesomeIcon icon={faEdit} /> Edit
                  </Card.Link>
                </Card.Body>
              </Card>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
}
