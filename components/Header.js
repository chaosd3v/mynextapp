// File - /components/Header.js
import Link from 'next/link'
import { Button,Container, Row, Col, Navbar, Nav, NavDropdown } from 'react-bootstrap'

const headerStyle = {};
  
const Header = () => (
<header>
      <Navbar className="Header" >
        <Container className="d-flex justify-content-between px-3">
            <a href="/" className="navbar-brand d-flex align-items-center py-2">My&nbsp; <span>Webapp</span></a>
            <Link href="/posts">POSTS</Link>
        </Container>
    </Navbar>

</header>
);

export default Header;