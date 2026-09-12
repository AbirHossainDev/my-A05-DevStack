import logo from "../assets/logo-text.png";

function Footer() {
  return (
    <footer className="mt-20 border-t border-gray-200 bg-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-12 md:grid-cols-4">

        {/* Brand */}
        <div>
          <a href="#" className="inline-block">
            <img
              src={logo}
              alt="Dev Stack"
              className="h-11 w-auto"
            />
          </a>

          <p className="mt-4 max-w-sm text-sm leading-6 text-gray-500">
            Curated tools, technologies, and resources for developers
            building modern software.
          </p>

          <div className="mt-5 flex gap-5 text-sm font-medium">
            <a
              href="https://github.com/AbirHossainDev"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-pink-600"
            >
              GitHub
            </a>

            <a
              href="https://x.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-pink-600"
            >
              Twitter
            </a>

            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-pink-600"
            >
              LinkedIn
            </a>
          </div>
        </div>

        {/* Product */}
        <div>
          <h3 className="text-sm font-bold uppercase text-gray-900">
            Product
          </h3>

          <div className="mt-5 flex flex-col gap-3 text-sm text-gray-500">
            <a href="#" className="hover:text-pink-600">
              Home
            </a>

            <a
              href="#technologies"
              className="hover:text-pink-600"
            >
              Technologies
            </a>

            <a
              href="#projects"
              className="hover:text-pink-600"
            >
              Projects
            </a>
          </div>
        </div>

        {/* Company */}
        <div>
          <h3 className="text-sm font-bold uppercase text-gray-900">
            Company
          </h3>

          <div className="mt-5 flex flex-col gap-3 text-sm text-gray-500">
            <a href="#about" className="hover:text-pink-600">
              About
            </a>

            <a href="#contact" className="hover:text-pink-600">
              Contact
            </a>

            <a href="#" className="hover:text-pink-600">
              Careers
            </a>
          </div>
        </div>

        {/* Legal */}
        <div>
          <h3 className="text-sm font-bold uppercase text-gray-900">
            Legal
          </h3>

          <div className="mt-5 flex flex-col gap-3 text-sm text-gray-500">
            <a href="#privacy" className="hover:text-pink-600">
              Privacy Policy
            </a>

            <a href="#terms" className="hover:text-pink-600">
              Terms of Service
            </a>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-gray-100">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-5 text-xs text-gray-400 sm:flex-row">
          <p>© 2026 Dev Stack. All rights reserved.</p>

          <div className="flex gap-6">
            <a href="#privacy" className="hover:text-pink-600">
              Privacy
            </a>

            <a href="#terms" className="hover:text-pink-600">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;