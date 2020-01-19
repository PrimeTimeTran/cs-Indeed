import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";

import { InputGroup, Row, Col, Form, Button, Container } from "react-bootstrap";

export default function CandidateForm(props) {
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
          <Form noValidate validated={validated} onSubmit={onSubmit}>
            <Form.Row>
              <Form.Group as={Col} md="4" controlId="validationCustom01">
                <Form.Label>First name</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="First name"
                  value={candidate.first_name}
                  onChange={e =>
                    setCandidate({ ...candidate, first_name: e.target.value })
                  }
                />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} md="4" controlId="validationCustom02">
                <Form.Label>Last name</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="Last name"
                  defaultValue={candidate.last_name}
                  onChange={e =>
                    setCandidate({ ...candidate, last_name: e.target.value })
                  }
                />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} md="4" controlId="validationCustomEmail">
                <Form.Label>Email</Form.Label>
                <InputGroup>
                  <InputGroup.Prepend>
                    <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
                  </InputGroup.Prepend>
                  <Form.Control
                    required
                    type="text"
                    placeholder="john@email.com"
                    aria-describedby="inputGroupPrepend"
                    defaultValue={candidate.email}
                    onChange={e =>
                      setCandidate({ ...candidate, email: e.target.value })
                    }
                  />
                  <Form.Control.Feedback type="invalid">
                    Please choose a email.
                  </Form.Control.Feedback>
                </InputGroup>
              </Form.Group>
            </Form.Row>
            <Form.Row>
              <Form.Group as={Col} md="6" controlId="validationCustom03">
                <Form.Label>City</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="City"
                  required
                  defaultValue={candidate.city}
                  onChange={e =>
                    setCandidate({ ...candidate, city: e.target.value })
                  }
                />
                <Form.Control.Feedback type="invalid">
                  Please provide a valid city.
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group as={Col} md="3" controlId="validationCustom05">
                <Form.Label>Country</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="U.S.A."
                  required
                  defaultValue={candidate.country}
                  onChange={e =>
                    setCandidate({ ...candidate, country: e.target.value })
                  }
                />
                <Form.Control.Feedback type="invalid">
                  Please provide a valid zip.
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} md="3" controlId="validationCustom05">
                <Form.Label>Photo URL</Form.Label>
                <Form.Control
                  type="text"
                  required
                  defaultValue={candidate.photo_url}
                  onChange={e =>
                    setCandidate({
                      ...candidate,
                      photo_url: e.target.value
                    })
                  }
                />
                <Form.Control.Feedback type="invalid">
                  Please provide a valid zip.
                </Form.Control.Feedback>
              </Form.Group>
            </Form.Row>
            <Form.Row>
              <Form.Group as={Col} md="6" controlId="validationCustom03">
                <Form.Label>Company</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="CoderSchool"
                  required
                  defaultValue={candidate.company}
                  onChange={e =>
                    setCandidate({ ...candidate, company: e.target.value })
                  }
                />
                <Form.Control.Feedback type="invalid">
                  Please provide a valid company.
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group as={Col} md="3" controlId="validationCustom05">
                <Form.Label>Job Title</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Developer"
                  required
                  defaultValue={candidate.job_title}
                  onChange={e =>
                    setCandidate({ ...candidate, job_title: e.target.value })
                  }
                />
                <Form.Control.Feedback type="invalid">
                  Please provide a valid zip.
                </Form.Control.Feedback>
              </Form.Group>
            </Form.Row>
            <Form.Group>
              <Form.Check
                label="Employed"
                onChange={e => console.log("e", e.target.value)}
                feedback="You must agree before submitting."
              />
            </Form.Group>
            <Button type="submit">Save</Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}
