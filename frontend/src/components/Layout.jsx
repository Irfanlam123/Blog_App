import { useState, useEffect } from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
import { IoMenu, IoClose, IoChevronDown, IoChevronUp } from "react-icons/io5";

export default function Layout() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [homeDropdownOpen, setHomeDropdownOpen] = useState(false);
  const [dropdownHover, setDropdownHover] = useState(false);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrolled(window.scrollY > 10);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = () => {
    setMobileMenuOpen(false);
    setHomeDropdownOpen(false);
  };

  const toggleHomeDropdown = () => {
    setHomeDropdownOpen((prev) => !prev);
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Navbar */}
      <nav className="fixed py-4 left-1/2 transform -translate-x-1/2 z-50 w-[95%] max-w-5xl mx-auto">
        <div
          className={`rounded-full transition-all duration-300 ${
            scrolled
              ? "bg-blue-50 backdrop-blur-md shadow-sm border border-gray-200/50"
              : "bg-blue-100 backdrop-blur-sm border border-gray-200/30"
          }`}
        >
          <div className="px-4 md:px-6 py-3 flex justify-between items-center">
            {/* Mobile Left: Hamburger + Logo */}
            <div className="flex items-center gap-2 md:hidden">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-full hover:bg-gray-100/60 transition-colors"
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? (
                  <IoClose className="text-2xl text-gray-700" />
                ) : (
                  <IoMenu className="text-2xl text-gray-700" />
                )}
              </button>
              <NavLink to="/" onClick={handleNavClick}>
                <img
                  src="./src/assets/logo.jpg"
                  alt="Logo"
                  className="w-8 h-8 rounded-full"
                />
              </NavLink>
            </div>

            {/* Mobile Center: Empty */}
            <div className="md:hidden flex-1"></div>

            {/* Mobile Right: Sign In */}
            <Link
              to="/login"
              className="md:hidden bg-gray-900 text-white font-sans text-sm px-4 py-2 rounded-full border border-gray-900 hover:bg-gray-800 transition-colors"
              onClick={handleNavClick}
            >
              Sign in
            </Link>

            {/* Desktop Logo & Nav */}
            <NavLink
              to="/"
              className="hidden md:flex text-sm font-semibold font-sans text-gray-900 tracking-tight hover:text-gray-700 transition-colors px-4 py-2 rounded-full hover:bg-gray-100/50 items-center"
              onClick={handleNavClick}
            >
              <img
                src="./src/assets/logo.jpg"
                alt="Logo"
                className="w-8 h-8 mr-2 rounded-full"
              />
              Minimal
            </NavLink>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-1 relative">
              {/* Pages with Dropdown */}
              <div 
                className="relative"
                onMouseEnter={() => {
                  setHomeDropdownOpen(true);
                  setDropdownHover(true);
                }}
                onMouseLeave={() => {
                  setDropdownHover(false);
                  // Close dropdown only after a short delay to allow clicking
                  setTimeout(() => {
                    if (!dropdownHover) {
                      setHomeDropdownOpen(false);
                    }
                  }, 300);
                }}
              >
                <button
                  className="flex items-center gap-1 font-sans text-sm transition-all duration-200 px-4 py-2 rounded-full text-gray-600 hover:bg-gray-100/60"
                  onClick={toggleHomeDropdown}
                >
                  Pages
                  {homeDropdownOpen ? (
                    <IoChevronUp className="text-gray-500 text-sm transition-transform duration-200" />
                  ) : (
                    <IoChevronDown className="text-gray-500 text-sm transition-transform duration-200" />
                  )}
                </button>

                {/* Dropdown */}
                <div
                  className={`absolute top-12 left-0 bg-white shadow-lg rounded-lg border border-gray-200 w-40 overflow-hidden transition-all duration-300 ease-in-out ${
                    homeDropdownOpen
                      ? "opacity-100 translate-y-0 pointer-events-auto"
                      : "opacity-0 -translate-y-2 pointer-events-none"
                  }`}
                  onMouseEnter={() => setDropdownHover(true)}
                  onMouseLeave={() => {
                    setDropdownHover(false);
                    setHomeDropdownOpen(false);
                  }}
                >
                  <NavLink
                    to="/blogs"
                    className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 transition-colors"
                    onClick={handleNavClick}
                  >
                    Blog
                  </NavLink>
                  <NavLink
                    to="/docs"
                    className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 transition-colors rounded-b-lg"
                    onClick={handleNavClick}
                  >
                    Docs
                  </NavLink>
                </div>
              </div>

              <NavLink
                to="/about"
                className={({ isActive }) =>
                  `font-sans text-sm transition-all duration-200 px-4 py-2 rounded-full ${
                    isActive
                      ? "bg-gray-900 text-white"
                      : "text-gray-600 hover:bg-gray-100/60"
                  }`
                }
                onClick={handleNavClick}
              >
                About
              </NavLink>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  `font-sans text-sm transition-all duration-200 px-4 py-2 rounded-full ${
                    isActive
                      ? "bg-gray-900 text-white"
                      : "text-gray-600 hover:bg-gray-100/60"
                  }`
                }
                onClick={handleNavClick}
              >
                Contact
              </NavLink>
            </div>

            {/* Desktop Sign In */}
            <div className="hidden md:block">
              <Link
                to="/login"
                className="bg-gray-50 text-black font-sans text-sm px-4 py-2 rounded-full border-2 border-gray-400 hover:bg-gray-200 transition-colors"
                onClick={handleNavClick}
              >
                Sign in
              </Link>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div
            className="md:hidden fixed inset-0 z-40 bg-black/20 backdrop-blur-sm"
            onClick={() => setMobileMenuOpen(false)}
          >
            <div
              className="absolute top-20 left-4 bg-white border border-gray-200 rounded-lg shadow-lg z-50 w-48 transform transition-all duration-300 ease-out origin-top-left"
              onClick={(e) => e.stopPropagation()}
            >
              <nav className="flex flex-col p-2">
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    `px-4 py-3 rounded-lg transition-colors ${
                      isActive
                        ? "bg-gray-100 font-medium text-gray-900"
                        : "text-gray-700 hover:bg-gray-100"
                    }`
                  }
                  onClick={handleNavClick}
                >
                  Home
                </NavLink>
                <NavLink
                  to="/blogs"
                  className={({ isActive }) =>
                    `px-4 py-3 rounded-lg transition-colors ${
                      isActive
                        ? "bg-gray-100 font-medium text-gray-900"
                        : "text-gray-700 hover:bg-gray-100"
                    }`
                  }
                  onClick={handleNavClick}
                >
                  Blogs
                </NavLink>
                <NavLink
                  to="/docs"
                  className={({ isActive }) =>
                    `px-4 py-3 rounded-lg transition-colors ${
                      isActive
                        ? "bg-gray-100 font-medium text-gray-900"
                        : "text-gray-700 hover:bg-gray-100"
                    }`
                  }
                  onClick={handleNavClick}
                >
                  Docs
                </NavLink>
                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    `px-4 py-3 rounded-lg transition-colors ${
                      isActive
                        ? "bg-gray-100 font-medium text-gray-900"
                        : "text-gray-700 hover:bg-gray-100"
                    }`
                  }
                  onClick={handleNavClick}
                >
                  About
                </NavLink>
                <NavLink
                  to="/contact"
                  className={({ isActive }) =>
                    `px-4 py-3 rounded-lg transition-colors ${
                      isActive
                        ? "bg-gray-100 font-medium text-gray-900"
                        : "text-gray-700 hover:bg-gray-100"
                    }`
                  }
                  onClick={handleNavClick}
                >
                  Contact
                </NavLink>
                <div className="border-t border-gray-200 mt-2 pt-2">
                  <Link
                    to="/login"
                    className="block px-4 py-3 rounded-lg bg-gray-900 text-white text-center hover:bg-gray-800 transition-colors"
                    onClick={handleNavClick}
                  >
                    Sign in
                  </Link>
                </div>
              </nav>
            </div>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main className="flex-1 mt-28 md:mt-24">
        <Outlet />
      </main>
    </div>
  );
}