import NavLinks from '@/ui/nav';
import { Container } from '@mui/material';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <NavLinks />
      <main>
        <Container maxWidth="md">
          {children}
        </Container>
      </main>
    </>
  );
}