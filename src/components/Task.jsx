import { Card } from 'react-bootstrap'

function Task({todo}) {
  return (
    <div>
        <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>{todo.title}</Card.Title>
        <Card.Text>
     {todo.description}
        </Card.Text>
     
      </Card.Body>
    </Card>
    </div>
  )
}

export default Task
