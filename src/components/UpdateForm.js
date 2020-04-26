import React, { Component, useState } from "react";
import { Form, Col, Button } from "react-bootstrap";

const UpdateForm = ({ handleClose, onSubmit }) => {
  const [state, setState] = useState({
    first_name: "",
    last_name: "",
    email: "",
    mobile: "",
    location_type: "City",
    location_string: "",
    isActive: false,
  });

  const {
    first_name,
    last_name,
    email,
    mobile,
    location_type,
    location_string,
    isActive,
  } = state;

  const allFilled = () => {
    if (
      first_name.length === 0 ||
      last_name.length === 0 ||
      email.length === 0 ||
      mobile.length === 0 ||
      location_string.length === 0 ||
      location_type.length === 0
    ) {
      return false;
    }

    return true;
  };

  const handleChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
      isActive: allFilled(),
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const requestObj = {
      first_name,
      last_name,
      mobile,
      email,
      location_type,
      location_string,
    };
    await onSubmit(e, requestObj).then(handleClose).catch(console.log);
  };

  return (
    <Form onSubmit={handleSubmit} className="add_lead_form">
      <Form.Row>
        <Form.Group as={Col} controlId="formGridFirstName">
          <Form.Label>FirstName*</Form.Label>
          <Form.Control
            type="text"
            placeholder=""
            name="first_name"
            value={first_name}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group as={Col} controlId="formGridLastName">
          <Form.Label>LastName*</Form.Label>
          <Form.Control
            type="text"
            placeholder=""
            name="last_name"
            value={last_name}
            onChange={handleChange}
          />
        </Form.Group>
      </Form.Row>

      <Form.Row>
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>Email Address*</Form.Label>
          <Form.Control
            type="email"
            placeholder=""
            name="email"
            value={email}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group as={Col} controlId="formGridMobile">
          <Form.Label>Mobile*</Form.Label>
          <Form.Control
            type="number"
            placeholder=""
            name="mobile"
            value={mobile}
            onChange={handleChange}
          />
        </Form.Group>
      </Form.Row>
      <Form.Row>
        <Form.Group as={Col} controlId="formGridLocationType">
          <Form.Label>Location Type*</Form.Label>
          <Form.Control
            as="select"
            name="location_type"
            value={location_type}
            onChange={handleChange}
          >
            <option>City</option>
            <option>State</option>
            <option>Country</option>
          </Form.Control>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridLocationString">
          <Form.Label>Location String*</Form.Label>
          <Form.Control
            type="text"
            placeholder=""
            name="location_string"
            value={location_string}
            onChange={handleChange}
          />
        </Form.Group>
      </Form.Row>

      <Form.Row>
        <Button variant="light" onClick={handleClose}>
          Close
        </Button>
        {isActive ? (
          <Button type="submit" variant="dark" className="add_lead_btn">
            Save
          </Button>
        ) : (
          <Button
            type="button"
            variant="light"
            disabled
            title="fill all fiels"
            className="add_lead_btn"
          >
            Save
          </Button>
        )}
      </Form.Row>
    </Form>
  );
};

export default UpdateForm;
