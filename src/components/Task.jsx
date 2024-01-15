import { Button, Card, Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { markAsDone, update } from "../store/todo.slice";
import { useState } from "react";

function Task({ todo, id }) {
  const [isupdate, setIsUpdate] = useState(false);
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    title: todo.title,
    description: todo.description,
  });

  const handleChange = (e) => {
    // Update form data when input values change
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(update({ id, formData }));

    setIsUpdate(false)
  };

  return (
    <div>
      {isupdate ? (
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label>Title</Form.Label>
            <Form.Control
              onChange={handleChange}
              value={formData.title} // Set initial value
              id="title"
              type="text"
              placeholder="Title"
              required
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Description</Form.Label>
            <Form.Control
              onChange={handleChange}
              value={formData.description}
              id="description"
              as="textarea"
              rows={3}
              placeholder="Description"
              required
            />
          </Form.Group>

          <Button variant="primary" type="submit">
            Save
          </Button>
        </Form>
      ) : (
        <Card style={{ width: "18rem" }}>
          <Card.Body>
            <Card.Title>{todo.title}</Card.Title>
            <Card.Text>{todo.description}</Card.Text>
            <Form>
              <Form.Check
                // onChange={(e)=> } // prettier-ignore
                // onChange={handleDone}
                type="switch"
                id="custom-switch"
                label="Mark done"
                disabled={todo.done ? todo.done : false}
              />
            </Form>
            {todo.done && <Card.Text>done</Card.Text>}
          </Card.Body>
          <Button
            onClick={() => {
              setIsUpdate(true);
            }}
          >
            Edit
          </Button>
        </Card>
      )}
    </div>
  );
}

export default Task;
