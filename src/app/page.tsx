import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function Home() {
  return (
    <main>
      <Container>
        <Row>
          <Col>&nbsp;</Col>
          <Col xs={6}>Main Page</Col>
          <Col>&nbsp;</Col>
        </Row>
      </Container>
    </main>
  );
}
