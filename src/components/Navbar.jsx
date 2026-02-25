import { useState } from "react";
import { useTheme } from '../hooks/useTheme.js';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const { theme, setTheme } = useTheme();

  const cycleTheme = () => {
    if (theme === 'light') setTheme('dark');
    else if (theme === 'dark') setTheme('system');
    else setTheme('light');
  };

  const themeLabel =
  theme === 'light' ? 'Light':
  theme === 'dark' ? 'Dark':
  'System';

  return (
    <nav className="bg-white dark:bg-dark shadow-md fixed w-full top-0 z-50 dar:shadow-md dark:shadow-primary">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo/Name */}
          <a
            href="#home"
            className="text-2xl font-bold text-dark dark:text-light dark:hover:text-primary hover:text-primary transition-colors"
          >
            SAL | DEV
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#about"
              className="text-dark dark:text-light dark:hover:text-primary hover:text-primary transition-colors font-medium"
            >
              About
            </a>
            <a
              href="#projects"
              className="text-dark dark:text-light dark:hover:text-primary hover:text-primary transition-colors font-medium"
            >
              Projects
            </a>
            <a
              href="#skills"
              className="text-dark dark:text-light dark:hover:text-primary hover:text-primary transition-colors font-medium"
            >
              Skills
            </a>
            <a
              href="#contact"
              className="text-dark dark:text-light dark:hover:text-primary hover:text-primary transition-colors font-medium"
            >
              Contact
            </a>

            {/* Theme Toggle */}
            <button onClick={cycleTheme} className="flex items-center gap-4 w-24 px-3 py-1.5 rounded-full border border-gray-200 dark:border-gray-700 text-xs text-dark dark:text-gray-100 hover:bg-light dark:hover:bg-black transition-colors"
            aria-label="Toggle theme">
              <span className="w-2.5 h-2.5 rounded-full 
      bg-yellow-400 dark:bg-blue-400" />
    <span>{themeLabel}</span>
            </button>

          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-dark focus:outline-none dark:text-light"
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
        <div className="px-2 pt-2 pb-3 space-y-1 bg-white shadow-lg dark:bg-dark dark:shadow-primary">
          <a
            href="#about"
            onClick={toggleMenu}
            className="block px-3 py-2 text-dark hover:bg-light hover:text-primary transition-colors rounded-md font-medium dark:text-light"
          >
            About
          </a>
          <a
            href="#projects"
            onClick={toggleMenu}
            className="block px-3 py-2 text-dark hover:bg-light hover:text-primary transition-colors rounded-md font-medium dark:text-light"
          >
            Projects
          </a>
          <a
            href="#skills"
            onClick={toggleMenu}
            className="block px-3 py-2 text-dark hover:bg-light hover:text-primary transition-colors rounded-md font-medium dark:text-light"
          >
            Skills
          </a>
          <a
            href="#contact"
            onClick={toggleMenu}
            className="block px-3 py-2 text-dark hover:bg-light hover:text-primary transition-colors rounded-md font-medium dark:text-light"
          >
            Contact
          </a>

          {/* Theme Toggle on mobile */}
    <button
      onClick={cycleTheme}
      className="mt-2 w-full flex items-center justify-center gap-2 px-3 py-2 rounded-full border border-gray-200 dark:border-gray-700 text-sm text-dark dark:text-gray-100 hover:bg-light dark:hover:bg-[#020617] transition-colors"
    >
      <span className="w-2.5 h-2.5 rounded-full 
        bg-yellow-400 dark:bg-blue-400" />
      <span>{themeLabel} mode</span>
    </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;