import { useState } from "react";
import logo from "../assets/logo-text.png";

function Navdar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="sticky top-0 z-50 border-b border-gray-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        <div className="flex h-20 items-center justify-between">

          {/* Left Side */}
          <div className="flex items-center gap-4">

            {/* Mobile Menu Button */}
            <button
              type="button"
              onClick={() => setMenuOpen(!menuOpen)}
              className="cursor-pointer rounded-lg border border-gray-300 px-3 py-2 text-xl text-gray-700 lg:hidden"
              aria-label="Toggle menu"
            >
              {menuOpen ? "✕" : "☰"}
            </button>

            {/* Logo - No Cursor Pointer */}
            <div className="shrink-0">
              <img
                src={logo}
                alt="Dev Stack"
                className="h-10 w-auto object-contain"
              />
            </div>

          </div>

          {/* Desktop Menu */}
          <div className="hidden items-center gap-8 lg:flex">

            <a
              href="#"
              className="cursor-pointer text-sm font-medium text-pink-600"
            >
              Home
            </a>

            <a
              href="#technologies"
              className="cursor-pointer text-sm font-medium text-gray-600 hover:text-pink-600"
            >
              Technologies
            </a>

            <a
              href="#projects"
              className="cursor-pointer text-sm font-medium text-gray-600 hover:text-pink-600"
            >
              Projects
            </a>

            <a
              href="#about"
              className="cursor-pointer text-sm font-medium text-gray-600 hover:text-pink-600"
            >
              About
            </a>

            <a
              href="#contact"
              className="cursor-pointer text-sm font-medium text-gray-600 hover:text-pink-600"
            >
              Contact
            </a>

          </div>

          {/* Right Side Buttons */}
          <div className="flex items-center gap-2 lg:gap-3">

            {/* Sign In */}
            <button
              type="button"
              className="cursor-pointer rounded-lg border border-gray-300 bg-white px-3 py-2 text-xs font-medium text-gray-700 hover:border-pink-400 hover:text-pink-600 lg:px-5 lg:py-2.5 lg:text-sm"
            >
              Sign In
            </button>

            {/* Sign Up */}
            <button
              type="button"
              className="cursor-pointer rounded-lg bg-pink-500 px-3 py-2 text-xs font-semibold text-white hover:bg-pink-600 lg:px-6 lg:py-2.5 lg:text-sm"
            >
              Sign Up
            </button>

          </div>

        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="border-t border-gray-100 py-4 lg:hidden">

            <div className="flex flex-col gap-1">

              <a
                href="#"
                onClick={closeMenu}
                className="cursor-pointer rounded-lg bg-pink-50 px-4 py-3 text-sm font-semibold text-pink-600"
              >
                Home
              </a>

              <a
                href="#technologies"
                onClick={closeMenu}
                className="cursor-pointer rounded-lg px-4 py-3 text-sm text-gray-600 hover:bg-gray-50 hover:text-pink-600"
              >
                Technologies
              </a>

              <a
                href="#projects"
                onClick={closeMenu}
                className="cursor-pointer rounded-lg px-4 py-3 text-sm text-gray-600 hover:bg-gray-50 hover:text-pink-600"
              >
                Projects
              </a>

              <a
                href="#about"
                onClick={closeMenu}
                className="cursor-pointer rounded-lg px-4 py-3 text-sm text-gray-600 hover:bg-gray-50 hover:text-pink-600"
              >
                About
              </a>

              <a
                href="#contact"
                onClick={closeMenu}
                className="cursor-pointer rounded-lg px-4 py-3 text-sm text-gray-600 hover:bg-gray-50 hover:text-pink-600"
              >
                Contact
              </a>

            </div>

          </div>
        )}

      </div>
    </nav>
  );
}

export default Navdar;