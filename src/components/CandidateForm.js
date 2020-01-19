import React, { useEffect, useState } from "react";

import { InputGroup, Row, Col, Form, Button, Container } from "react-bootstrap";

export default function CandidateForm(props) {
  const [candidate, setCandidate] = useState({
    city: "",
    email: "",
    company: "",
    country: "",
    job_title: "",
    photo_url: "",
    last_name: "",
    first_name: ""
  });

  const [validated, setValidated] = useState(false);

  useEffect(() => {
    if (props.candidate) {
      setCandidate(props.candidate);
    }
  }, [props]);

  const updateCandidate = async () => {
    console.log('updateCandidate');
    const config = {
      mode: "cors",
      method: "PUT",
      cache: "no-cache",
      redirect: "follow",
      referrer: "no-referrer",
      credentials: "same-origin",
      body: JSON.stringify(candidate),
      headers: {
        "Content-Type": "application/json"
      }
    };
    // try {
      const response = await fetch(
        `http://localhost:3001/candidates/${props.candidate.id}`,
        config
      );
      console.log("id", response);
    // } catch (error) {
    //   console.log("Oops");
    // }
  };

  const onSubmit = e => {
    const form = e.currentTarget;
    e.preventDefault();
    if (form.checkValidity() === false) {
      e.stopPropagation();
    }

    setValidated(true);
    updateCandidate();
  };

  return (
    <Container style={{ paddingTop: 100 }}>
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
                <Form.Control.Feedback type="invalid">
                  Please provide a first name.
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} md="4" controlId="validationCustom02">
                <Form.Label>Last name</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="Last name"
                  value={candidate.last_name}
                  onChange={e =>
                    setCandidate({ ...candidate, last_name: e.target.value })
                  }
                />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                <Form.Control.Feedback type="invalid">
                  Please provide a last name.
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} md="4" controlId="validationCustom03">
                <Form.Label>Email</Form.Label>
                <InputGroup>
                  <InputGroup.Prepend>
                    <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
                  </InputGroup.Prepend>
                  <Form.Control
                    required
                    type="text"
                    value={candidate.email}
                    placeholder="john@email.com"
                    onChange={e =>
                      setCandidate({ ...candidate, email: e.target.value })
                    }
                  />
                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                  <Form.Control.Feedback type="invalid">
                    Please choose a email.
                  </Form.Control.Feedback>
                </InputGroup>
              </Form.Group>
            </Form.Row>
            <Form.Row>
              <Form.Group as={Col} md="6" controlId="validationCustom04">
                <Form.Label>City</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="City"
                  value={candidate.city}
                  onChange={e =>
                    setCandidate({ ...candidate, city: e.target.value })
                  }
                />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                <Form.Control.Feedback type="invalid">
                  Please provide a valid city.
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group as={Col} md="3" controlId="validationCustom05">
                <Form.Label>Country</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="U.S.A."
                  value={candidate.country}
                  onChange={e =>
                    setCandidate({ ...candidate, country: e.target.value })
                  }
                />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                <Form.Control.Feedback type="invalid">
                  Please provide a country.
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} md="3" controlId="validationCustom06">
                <Form.Label>Photo URL</Form.Label>
                <Form.Control
                  required
                  type="text"
                  value={candidate.photo_url}
                  onChange={e =>
                    setCandidate({
                      ...candidate,
                      photo_url: e.target.value
                    })
                  }
                />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                <Form.Control.Feedback type="invalid">
                  Please provide a photo URL.
                </Form.Control.Feedback>
              </Form.Group>
            </Form.Row>
            <Form.Row>
              <Form.Group as={Col} md="6" controlId="validationCustom07">
                <Form.Label>Company</Form.Label>
                <Form.Control
                  required
                  type="text"
                  value={candidate.company}
                  placeholder="CoderSchool"
                  onChange={e =>
                    setCandidate({ ...candidate, company: e.target.value })
                  }
                />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                <Form.Control.Feedback type="invalid">
                  Please provide a valid company.
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group as={Col} md="3" controlId="validationCustom08">
                <Form.Label>Job Title</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="Developer"
                  value={candidate.job_title}
                  onChange={e =>
                    setCandidate({ ...candidate, job_title: e.target.value })
                  }
                />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                <Form.Control.Feedback type="invalid">
                  Please provide a valid job title.
                </Form.Control.Feedback>
              </Form.Group>
            </Form.Row>
            <Button type="submit">Save</Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}
