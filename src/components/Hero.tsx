import bannerStack from "../assets/banner-stack.png";

function Hero() {
  const handleExplore = () => {
    document
      .getElementById("technologies")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <div className="grid items-center gap-10 md:grid-cols-2">

        {/* Left Side */}
        <div>
          <h1 className="text-4xl font-extrabold leading-tight text-slate-900 sm:text-5xl">
            Build Your Ideal
            <br />

            <span className="bg-gradient-to-r from-orange-500 via-pink-500 to-violet-600 bg-clip-text text-transparent">
              Development Stack
            </span>
          </h1>

          <p className="mt-5 max-w-xl text-base leading-7 text-gray-500">
            Explore frontend, backend, database, and tooling options,
            compare them side by side, and build the perfect stack for
            your next project.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <button
              onClick={handleExplore}
              className="rounded-lg bg-gradient-to-r from-orange-500 via-pink-500 to-violet-600 px-5 py-3 text-sm font-semibold text-white transition hover:opacity-90"
            >
              Explore Technologies
            </button>

            <button
              onClick={handleExplore}
              className="rounded-lg border border-gray-200 px-5 py-3 text-sm font-medium text-gray-700 transition hover:bg-gray-50"
            >
              Learn More
            </button>
          </div>
        </div>

        {/* Right Side */}
        <div className="flex justify-center">
          <img
            src={bannerStack}
            alt="Development Stack"
            className="w-full max-w-md object-contain"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;