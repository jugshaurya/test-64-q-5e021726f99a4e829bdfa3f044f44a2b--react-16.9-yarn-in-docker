import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

const UpdateForm = ({ handleClose, onSubmit, value }) => {
  const [communication, setCommunication] = useState(value || "");
  const [isActive, setActive] = useState(false);

  const allFilled = () => {
    return communication.length > 0;
  };

  const handleChange = (e) => {
    if (allFilled()) {
      setActive(true);
    }
    setCommunication(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const requestObj = {
      communication,
    };
    await onSubmit(e, requestObj).then(handleClose).catch(console.log);
  };

  return (
    <Form onSubmit={handleSubmit} className="update_lead_form">
      <Form.Row>
        <Form.Group controlId="communication">
          <Form.Label>Communication</Form.Label>
          <Form.Control
            as="textarea"
            rows="3"
            name="communication"
            value={communication}
            onChange={handleChange}
          />
        </Form.Group>
      </Form.Row>
      <Form.Row>
        <Button variant="light" onClick={handleClose}>
          Close
        </Button>
        {isActive ? (
          <Button type="submit" variant="dark" className="update_lead_btn">
            Save
          </Button>
        ) : (
          <Button
            type="button"
            variant="light"
            disabled
            title="fill all fields"
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
