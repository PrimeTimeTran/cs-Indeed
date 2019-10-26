import React, { Component } from "react";

import { Link } from "react-router-dom";
import {
  ListGroup,
  ListGroupItem,
  Container,
  Row,
  Col,
  Card
} from "react-bootstrap";

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
            console.log("candidate", candidate);
            return (
              <Col lg="2">
                <Card>
                  <Card.Img variant="top" src={candidate.profile_pic_url} />
                  <Card.Body>
                    <Card.Title>{candidate.first_name + ' ' + candidate.last_name}</Card.Title>
                    <Card.Text>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </Card.Text>
                  </Card.Body>
                  <ListGroup className="list-group-flush">
                    <ListGroupItem>{candidate.company}</ListGroupItem>
                    <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
                    <ListGroupItem>{candidate.id}</ListGroupItem>
                  </ListGroup>
                  <Card.Body>
                    <Card.Link href="#">
                      <button
                        onClick={() => this.onDeleteCandidate(candidate.id)}
                      >
                        Delete Candidate
                      </button>
                    </Card.Link>
                    <Card.Link href="#">
                      <Link to={`/candidates/${candidate.id}/edit`}>Edit</Link>
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
