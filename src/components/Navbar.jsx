import { useState } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white shadow-md fixed w-full top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo/Name */}
          <a
            href="#home"
            className="text-2xl font-bold text-dark hover:text-primary transition-colors"
          >
            SAL | DEV
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex space-x-8">
            <a
              href="#about"
              className="text-dark hover:text-primary transition-colors font-medium"
            >
              About
            </a>
            <a
              href="#projects"
              className="text-dark hover:text-primary transition-colors font-medium"
            >
              Projects
            </a>
            <a
              href="#skills"
              className="text-dark hover:text-primary transition-colors font-medium"
            >
              Skills
            </a>
            <a
              href="#contact"
              className="text-dark hover:text-primary transition-colors font-medium"
            >
              Contact
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-dark focus:outline-none"
            aria-label="Toggle menu"
          >
            {/* Hamburger Icon */}
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isOpen ? (
                // X icon when menu is open
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                // Hamburger icon when menu is closed
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden ${isOpen ? "block" : "hidden"}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 bg-white shadow-lg">
          <a
            href="#about"
            onClick={toggleMenu}
            className="block px-3 py-2 text-dark hover:bg-light hover:text-primary transition-colors rounded-md font-medium"
          >
            About
          </a>
          <a
            href="#projects"
            onClick={toggleMenu}
            className="block px-3 py-2 text-dark hover:bg-light hover:text-primary transition-colors rounded-md font-medium"
          >
            Projects
          </a>
          <a
            href="#skills"
            onClick={toggleMenu}
            className="block px-3 py-2 text-dark hover:bg-light hover:text-primary transition-colors rounded-md font-medium"
          >
            Skills
          </a>
          <a
            href="#contact"
            onClick={toggleMenu}
            className="block px-3 py-2 text-dark hover:bg-light hover:text-primary transition-colors rounded-md font-medium"
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;