// Navbar.js
import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className=" p-2">
      <div className="container px-2 mx-auto flex justify-between items-center">
        <Link to="/" className="text-white text-2xl font-bold">
          Logo
        </Link>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          <button
            onClick={toggleNavbar}
            className="text-white text-xl focus:outline-none"
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Desktop Menu */}
        <div className={`md:flex ${isOpen ? 'block' : 'hidden'}`}>
        <NavLink
            to="/"
            className="text-white mx-2 my-1 md:my-0"
          >
            
            
          </NavLink>
          <NavLink
            to="/login"
            className="text-white mx-2 my-1 md:my-0"
          >
            Login
          </NavLink>
          <NavLink
            to="/register"
            className="text-white mx-2 my-1 md:my-0"
          >
            Register
          </NavLink>
          
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
