import { useCallback, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useDispatch } from "react-redux";
import { addTodo } from "../store/todo.slice";
function AddTask() {
  const dispatch = useDispatch();

  const handleSubmit = useCallback((e) => {
    e.preventDefault();

    dispatch(
      addTodo({
        title: e.target.title.value,
        description: e.target.description.value,
      })
    );
  }, []);

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3">
        <Form.Label>Title</Form.Label>
        <Form.Control id="title" type="text" placeholder="Title" required />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Description</Form.Label>
        <Form.Control
          id="description"
          as="textarea"
          rows={3}
          placeholder="Description"
          required
        />
      </Form.Group>

      <Button variant="primary" type="submit">
        AddTodo
      </Button>
    </Form>
  );
}

export default AddTask;
