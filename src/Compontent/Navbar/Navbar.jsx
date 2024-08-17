import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
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
          <Nav className="m-auto my-2 my-lg-0">
            <Link to="/" className="nav-link ms-3">
              Home
            </Link>
            <Link to="/find-apet" className="nav-link ms-3">
              Find a pet
            </Link>
            <Link to="/about-us" className="nav-link ms-3">
              About Us
            </Link>
          </Nav>
          <Button className="sign-btn">
            <Link to="/sign-up" className="text-white">
              Sign Up
            </Link>
          </Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
export default NavbarBrand;
