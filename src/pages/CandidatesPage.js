import React, { Component } from "react";

import {
  Row,
  Col,
  Card,
  ListGroup,
  Container,
  ListGroupItem
} from "react-bootstrap";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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

const getImageUrl = candidate => {
  const gender = candidate.gender === "Male" ? "men" : "women";
  const num = (Math.random() * 75).toFixed();
  return `https://randomuser.me/api/portraits/${gender}/${num}.jpg`;
};

export default class CandidatesPage extends Component {
  state = {
    candidates: []
  };
  async componentDidMount() {
    const response = await fetch("http://localhost:3001/candidates");
    const data = await response.json();
    this.setState({ candidates: data });
  }

  onDeleteCandidate = id => {
    try {
      const config = { method: "DELETE" };
      fetch(`http://localhost:3001/candidates/${id}`, config);
      const newCandidates = this.state.candidates.filter(
        candidate => candidate.id !== id
      );
      this.setState({ candidates: newCandidates });
    } catch (error) {
      console.log("Error: ", error);
    }
  };

  render() {
    return (
      <Container fluid style={{ paddingTop: 100 }}>
        <Row>
          {this.state.candidates.map(candidate => {
            return (
              <Col lg="3" key={candidate.id}>
                <Card>
                  {/* <Card.Img variant="top" src={getImageUrl(candidate)} /> */}
                  <Card.Img variant="top" src={candidate.profile_pic_url} />
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
                      <FontAwesomeIcon icon={faMapPin} />{" "}
                      {candidate.locations && candidate.locations[0].city}
                    </ListGroupItem>
                    <ListGroupItem>
                      <FontAwesomeIcon icon={faMap} />{" "}
                      {candidate.locations && candidate.country}
                    </ListGroupItem>
                    <ListGroupItem>
                      <FontAwesomeIcon icon={faEnvelope} /> {candidate.email}
                    </ListGroupItem>
                  </ListGroup>
                  <Card.Body>
                    <Card.Link
                      onClick={() => this.onDeleteCandidate(candidate.id)}
                    >
                      <FontAwesomeIcon icon={faTrash} /> Remove
                    </Card.Link>
                    <Card.Link href={`/candidates/${candidate.id}/edit`}>
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
}
