import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import NavLinks from '@/ui/nav';

export default function Home() {
  return (
    <>
    <NavLinks />
    <main>
      <Container>
        <Row>
          <Col></Col>          
          <Col xs={6}>Main Page</Col>
          <Col>&nbsp;</Col>
        </Row>
      </Container>
    </main>
    </>
  );
}
