import React from "react";
import { Form, Button } from "react-bootstrap";

const DeleteForm = ({ handleClose, onSubmit, value }) => {
  const handleSubmit = async (e) => {
    e.preventDefault();
    await onSubmit(e).then(handleClose).catch(console.log);
  };

  return (
    <Form onSubmit={handleSubmit} className="delete_lead_form">
      <Form.Row>
        <Button type="submit" variant="danger" className="delete_lead_btn">
          Delete
        </Button>
        <Button variant="dark" onClick={handleClose}>
          Cancel
        </Button>
      </Form.Row>
    </Form>
  );
};

export default DeleteForm;
