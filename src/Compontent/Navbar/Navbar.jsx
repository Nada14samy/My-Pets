import { Link } from "react-router-dom";
import "./Navbar.css";

const NavbarBrand = () => {
  return (
    <nav className="nav w-full flex justify-center items-center h-fit p-4">
      <div className="container flex justify-between w-11/12">
        <div className="nav-brand">
          <h1 className="text-4xl">
            <Link to="/">My Pets</Link>
          </h1>
        </div>
        <ul className="nav-items flex">
          <li className="nav-item m-3">
            <Link to="/" className="nav-link">
              Home
            </Link>
          </li>
          <li className="nav-item m-3">
            <Link to="/find" className="nav-link">
              Find a pet
            </Link>
          </li>
          <li className="nav-item m-3">
            <Link to="/about" className="nav-link">
              About Us
            </Link>
          </li>
        </ul>
        <div className="flex gap-4">
          <div className="btn flex justify-center items-center rounded-xl px-5 py-0">
            <Link to="/signup" className="text-white m-0 p-0">
              Sign Up
            </Link>
          </div>
          <div className="btn flex justify-center items-center rounded-xl px-5 py-0">
            <Link to="/login" className="text-white m-0 p-0">
              Log In
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};
export default NavbarBrand;
