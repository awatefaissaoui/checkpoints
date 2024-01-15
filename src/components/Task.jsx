import { Card, Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { markAsDone } from "../store/todo.slice";

function Task({ todo, id  }) {
  const dispatch = useDispatch();

  const handleDone = () => {
    dispatch(markAsDone(id));
  };
  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Body>
          <Card.Title>{todo.title}</Card.Title>
          <Card.Text>{todo.description}</Card.Text>
          <Form>
            <Form.Check
              // onChange={(e)=> } // prettier-ignore
              onChange={handleDone}
              type="switch"
              id="custom-switch"
              label="Check this switch"
              disabled={todo.done ? todo.done : false}
            />
          </Form>
          {todo.done && <Card.Text>done</Card.Text>}
        </Card.Body>
      </Card>
    </div>
  );
}

export default Task;
