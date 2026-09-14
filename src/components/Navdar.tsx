import { useState } from "react";
import logo from "../assets/logo-text.png";

function Navdar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="sticky top-0 z-50 border-b border-gray-200 bg-white">
      <div className="mx-auto max-w-7xl px-2 sm:px-4 lg:px-8">

        {/* Navbar */}
        <div className="flex h-14 items-center justify-between sm:h-16 lg:h-20">

          {/* Left Side */}
          <div className="flex min-w-0 items-center gap-2 sm:gap-3 lg:gap-4">

            {/* Mobile Menu Button */}
            <button
              type="button"
              onClick={() => setMenuOpen(!menuOpen)}
              className="
                flex h-8 w-8
                cursor-pointer
                items-center justify-center
                rounded-md
                border border-gray-300
                text-lg
                leading-none
                text-gray-700
                transition
                hover:border-pink-400
                hover:text-pink-600
                sm:h-9 sm:w-9
                sm:text-xl
                lg:hidden
              "
              aria-label="Toggle menu"
              aria-expanded={menuOpen}
            >
              {menuOpen ? "✕" : "☰"}
            </button>

            {/* Logo */}
            <div className="shrink-0">
              <img
                src={logo}
                alt="Dev Stack"
                className="
                  h-7
                  w-auto
                  max-w-[135px]
                  object-contain
                  sm:h-8
                  sm:max-w-[155px]
                  lg:h-10
                  lg:max-w-none
                "
              />
            </div>

          </div>

          {/* Desktop Menu */}
          <div className="hidden items-center gap-6 lg:flex xl:gap-8">

            <a
              href="#"
              className="
                cursor-pointer
                text-sm
                font-medium
                text-pink-600
                transition
                hover:text-pink-700
              "
            >
              Home
            </a>

            <a
              href="#technologies"
              className="
                cursor-pointer
                text-sm
                font-medium
                text-gray-600
                transition
                hover:text-pink-600
              "
            >
              Technologies
            </a>

            <a
              href="#projects"
              className="
                cursor-pointer
                text-sm
                font-medium
                text-gray-600
                transition
                hover:text-pink-600
              "
            >
              Projects
            </a>

            <a
              href="#about"
              className="
                cursor-pointer
                text-sm
                font-medium
                text-gray-600
                transition
                hover:text-pink-600
              "
            >
              About
            </a>

            <a
              href="#contact"
              className="
                cursor-pointer
                text-sm
                font-medium
                text-gray-600
                transition
                hover:text-pink-600
              "
            >
              Contact
            </a>

          </div>

          {/* Right Side */}
          <div className="flex shrink-0 items-center gap-1.5 sm:gap-2 lg:gap-3">

            {/* Sign In */}
            <button
              type="button"
              className="
                cursor-pointer
                rounded-md
                border
                border-gray-300
                bg-white
                px-2.5
                py-1.5
                text-[11px]
                font-medium
                text-gray-700
                transition
                hover:border-pink-400
                hover:text-pink-600
                sm:px-3
                sm:py-2
                sm:text-xs
                lg:rounded-lg
                lg:px-5
                lg:py-2.5
                lg:text-sm
              "
            >
              Sign In
            </button>

            {/* Sign Up */}
            <button
              type="button"
              className="
                cursor-pointer
                rounded-md
                bg-pink-500
                px-2.5
                py-1.5
                text-[11px]
                font-semibold
                text-white
                transition
                hover:bg-pink-600
                sm:px-3
                sm:py-2
                sm:text-xs
                lg:rounded-lg
                lg:px-6
                lg:py-2.5
                lg:text-sm
              "
            >
              Sign Up
            </button>

          </div>

        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="border-t border-gray-100 py-2 sm:py-3 lg:hidden">

            <div className="flex flex-col gap-0.5">

              {/* Home */}
              <a
                href="#"
                onClick={closeMenu}
                className="
                  cursor-pointer
                  rounded-md
                  bg-pink-50
                  px-3
                  py-2
                  text-xs
                  font-semibold
                  text-pink-600
                  transition
                  hover:bg-pink-100
                  sm:px-4
                  sm:py-2.5
                  sm:text-sm
                "
              >
                Home
              </a>

              {/* Technologies */}
              <a
                href="#technologies"
                onClick={closeMenu}
                className="
                  cursor-pointer
                  rounded-md
                  px-3
                  py-2
                  text-xs
                  text-gray-600
                  transition
                  hover:bg-gray-50
                  hover:text-pink-600
                  sm:px-4
                  sm:py-2.5
                  sm:text-sm
                "
              >
                Technologies
              </a>

              {/* Projects */}
              <a
                href="#projects"
                onClick={closeMenu}
                className="
                  cursor-pointer
                  rounded-md
                  px-3
                  py-2
                  text-xs
                  text-gray-600
                  transition
                  hover:bg-gray-50
                  hover:text-pink-600
                  sm:px-4
                  sm:py-2.5
                  sm:text-sm
                "
              >
                Projects
              </a>

              {/* About */}
              <a
                href="#about"
                onClick={closeMenu}
                className="
                  cursor-pointer
                  rounded-md
                  px-3
                  py-2
                  text-xs
                  text-gray-600
                  transition
                  hover:bg-gray-50
                  hover:text-pink-600
                  sm:px-4
                  sm:py-2.5
                  sm:text-sm
                "
              >
                About
              </a>

              {/* Contact */}
              <a
                href="#contact"
                onClick={closeMenu}
                className="
                  cursor-pointer
                  rounded-md
                  px-3
                  py-2
                  text-xs
                  text-gray-600
                  transition
                  hover:bg-gray-50
                  hover:text-pink-600
                  sm:px-4
                  sm:py-2.5
                  sm:text-sm
                "
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