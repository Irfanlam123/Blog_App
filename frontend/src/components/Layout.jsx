import { useState, useEffect } from "react";
import { NavLink, Outlet } from "react-router-dom";

export default function Layout() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      {/* Minimal Navbar */}
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          scrolled 
            ? "bg-white/95 backdrop-blur-sm border-b border-gray-100" 
            : "bg-white"
        }`}
      >
        <div className="max-w-4xl mx-auto px-6 py-4 flex justify-between items-center">
          {/* Logo/Brand - Moved closer to center */}
          <NavLink 
            to="/" 
            className="text-xl font-sans text-gray-900 tracking-tight hover:text-gray-700 transition-colors"
          >
            Minimal
          </NavLink>
          
          {/* Navigation Links - Closer spacing and centered */}
          <div className="flex space-x-8">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `text-gray-600 font-sans text-sm transition-all duration-200 px-3 py-2 ${
                  isActive 
                    ? "bg-gray-900 text-white rounded-full" 
                    : "hover:bg-gray-100 hover:rounded-full"
                }`
              }
              end
            >
              Home
            </NavLink>
            <NavLink
              to="/blogs"
              className={({ isActive }) =>
                `text-gray-600 font-sans text-sm transition-all duration-200 px-3 py-2 ${
                  isActive 
                    ? "bg-gray-900 text-white rounded-full" 
                    : "hover:bg-gray-100 hover:rounded-full"
                }`
              }
            >
              Blogs
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `text-gray-600 font-sans text-sm transition-all duration-200 px-3 py-2 ${
                  isActive 
                    ? "bg-gray-900 text-white rounded-full" 
                    : "hover:bg-gray-100 hover:rounded-full"
                }`
              }
            >
              About
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `text-gray-600 font-sans text-sm transition-all duration-200 px-3 py-2 ${
                  isActive 
                    ? "bg-gray-900 text-white rounded-full" 
                    : "hover:bg-gray-100 hover:rounded-full"
                }`
              }
            >
              Contact
            </NavLink>
          </div>
        </div>
      </nav>

      <main className="flex-1 mt-16">
        <Outlet />
      </main>
    </div>
  );
}