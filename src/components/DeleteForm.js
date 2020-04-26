import React, { Component } from "react";
import { Form, Col, Button } from "react-bootstrap";
const DeleteForm = ({ handleClose, handleSubmit }) => {
  return (
    <Form>
      <Form.Row>
        <Form.Group as={Col} controlId="formGridFirstName">
          <Form.Label>FirstName *</Form.Label>
          <Form.Control type="text" placeholder="" name="first_name" />
        </Form.Group>
        <Form.Group as={Col} controlId="formGridLastName">
          <Form.Label>LastName *</Form.Label>
          <Form.Control type="text" placeholder="" name="last_name" />
        </Form.Group>
      </Form.Row>

      <Form.Row>
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>Email Address *</Form.Label>
          <Form.Control type="email" placeholder="" name="email" />
        </Form.Group>
        <Form.Group as={Col} controlId="formGridMobile">
          <Form.Label>Mobile *</Form.Label>
          <Form.Control type="number" placeholder="" name="mobile" />
        </Form.Group>
      </Form.Row>
      <Form.Row>
        <Form.Group as={Col} controlId="formGridLocationType">
          <Form.Label>Location Type*</Form.Label>
          <Form.Control as="select" name="location_type" value="Country">
            <option>City</option>
            <option>State</option>
            <option>Country</option>
          </Form.Control>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridLocationString">
          <Form.Label>Location String*</Form.Label>
          <Form.Control type="text" placeholder="" name="location_string" />
        </Form.Group>
      </Form.Row>

      <Form.Row>
        <Button variant="light" onClick={handleClose}>
          Close
        </Button>
        <Button variant="dark" onClick={handleSubmit}>
          Save
        </Button>
      </Form.Row>
    </Form>
  );
};

export default DeleteForm;
