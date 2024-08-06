import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "./Navbar.scss";
const NavbarBrand = () => {
    return (
        <Navbar expand="lg navbar">
            <Container className="container">
                <Navbar.Brand href="/" className="navBrand">
                <h1>My Pets</h1>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="m-auto my-2 my-lg-0"
                        
                    >
                        <Nav.Link href="/" className='nav-link ms-3'>Home</Nav.Link>
                        <Nav.Link href="/" className='nav-link ms-3'>Find a pet</Nav.Link>
                        <Nav.Link href="/" className='nav-link ms-3'>
                            About Us
                        </Nav.Link>
                    </Nav>
                    <Button className="sign-btn">
                        <a href="/" className="text-white">Sign Up</a>
                    </Button>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}
export default NavbarBrand;