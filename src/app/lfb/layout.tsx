import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import NavLinks from '@/ui/nav';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <NavLinks />
      <main>
        <Container>
          <Row>
            <Col></Col>
            <Col xs={6}>{children}</Col>
            <Col>&nbsp;</Col>
          </Row>
        </Container>
      </main>
    </>
  );
}