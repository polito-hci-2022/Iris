import Form from 'react-bootstrap/Form';
import { Row, Container } from 'react-bootstrap'

function BasicExample() {
  return (
    <Container fluid>
    <Form>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Control as="textarea" rows={2} placeholder="Scrivi qui" />
      </Form.Group>
    </Form>
    </Container>

  );
}

export default BasicExample;