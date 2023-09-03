import React from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";

export default function search({parentCallback})
{

    function handleSubmission(event)
    {
        parentCallback(event.target.cityName.value);
        event.preventDefault();
    }

    return(
    <Container className="mt-6">
      <Row>
        <Col>
          <Form className="d-flex" onSubmit={handleSubmission}>
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-3 rounded-pill"
              aria-label="Search"
              size="lg"
              name = "cityName"
            />
            <Button className="rounded-pill" variant="primary" size="lg" type="submit">
              Search
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
    );
}