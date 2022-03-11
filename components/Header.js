// File - /components/Header.js
import Link from 'next/link'
import { Button,Container, Row, Col, Navbar, Nav, NavDropdown } from 'react-bootstrap'

const headerStyle = {};
  
const Header = () => (
<header>
      <Navbar className="Header" >
        <Container className="d-flex justify-content-between px-3">
            <a href="/" className="navbar-brand d-flex align-items-center py-2">Next<span>app</span></a>
            <Link href="/posts">Psuedo Posts</Link>
        </Container>
    </Navbar>

</header>
);

export default Header;
