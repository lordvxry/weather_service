import { FC } from 'react';
import './Header.css';
import { Navbar, Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Header: FC = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand>
          <FontAwesomeIcon icon="cloud-sun" className="me-2 header-icon" />
          Weather Service
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
};

export default Header;
