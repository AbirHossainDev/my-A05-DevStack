function Footer() {
  return (
    <footer className="mt-20 border-t border-gray-200 bg-white">

      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-4 lg:px-8">

        <div>
          <div className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-r from-orange-500 via-pink-500 to-violet-600 text-xs font-bold text-white">
              DS
            </div>

            <span className="font-bold text-slate-900">
              Dev Stack
            </span>
          </div>

          <p className="mt-4 max-w-xs text-sm leading-6 text-gray-500">
            Curated tools, technologies, and resources for developers
            building modern software.
          </p>

          <div className="mt-4 flex gap-4 text-sm text-gray-600">
            <a href="#">GitHub</a>
            <a href="#">Twitter</a>
            <a href="#">LinkedIn</a>
          </div>
        </div>

        <div>
          <h3 className="font-semibold text-slate-900">Product</h3>
          <div className="mt-4 space-y-3 text-sm text-gray-500">
            <p>Home</p>
            <p>Technologies</p>
            <p>Projects</p>
          </div>
        </div>

        <div>
          <h3 className="font-semibold text-slate-900">Company</h3>
          <div className="mt-4 space-y-3 text-sm text-gray-500">
            <p>About</p>
            <p>Contact</p>
            <p>Careers</p>
          </div>
        </div>

        <div>
          <h3 className="font-semibold text-slate-900">Legal</h3>
          <div className="mt-4 space-y-3 text-sm text-gray-500">
            <p>Privacy Policy</p>
            <p>Terms of Service</p>
          </div>
        </div>

      </div>

      <div className="border-t border-gray-100">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-3 px-4 py-5 text-xs text-gray-400 sm:flex-row sm:px-6 lg:px-8">
          <p>© 2026 Dev Stack. All rights reserved.</p>

          <div className="flex gap-5">
            <span>Privacy</span>
            <span>Terms</span>
          </div>
        </div>
      </div>

    </footer>
  );
}

export default Footer;