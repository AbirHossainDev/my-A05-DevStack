function Navbar() {
  return (
    <nav className="sticky top-0 z-50 border-b border-gray-100 bg-white/95 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">

        {/* Mobile Left */}
        <button className="text-2xl text-gray-800 md:hidden">
          ☰
        </button>

        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-r from-orange-500 via-pink-500 to-violet-600 text-sm font-bold text-white">
            DS
          </div>

          <span className="bg-gradient-to-r from-orange-500 via-pink-500 to-violet-600 bg-clip-text text-lg font-bold text-transparent">
            Dev Stack
          </span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden items-center gap-7 text-sm text-gray-600 md:flex">
          <a className="text-pink-600" href="#">Home</a>
          <a href="#technologies">Technologies</a>
          <a href="#">Projects</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
        </div>

        {/* Buttons */}
        <div className="flex items-center gap-2">
          <button className="hidden px-3 py-2 text-sm text-gray-700 sm:block">
            Sign In
          </button>

          <button className="rounded-full bg-gradient-to-r from-orange-500 via-pink-500 to-violet-600 px-5 py-2 text-sm font-medium text-white">
            Sign Up
          </button>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;