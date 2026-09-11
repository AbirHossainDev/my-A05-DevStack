import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Navbar from "./components/Navdar";
import Hero from "./components/Hero";
import TechnologyCard from "./components/TechnologyCard";
import StackSidebar from "./components/StackSidebar";
import Footer from "./components/Footer";

import type { Technology } from "./types/technology";

function App() {
  const [technologies, setTechnologies] = useState<Technology[]>([]);
  const [stack, setStack] = useState<Technology[]>([]);
  const [loading, setLoading] = useState(true);

  // Load JSON data
  useEffect(() => {
    fetch("/data.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to load data");
        }

        return response.json();
      })
      .then((data: Technology[]) => {
        setTechnologies(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        toast.error("Failed to load technologies!");
        setLoading(false);
      });
  }, []);

  // Add technology
  const handleAdd = (technology: Technology) => {
    const alreadyAdded = stack.some(
      (item) => item.id === technology.id
    );

    if (alreadyAdded) {
      toast.warning(
        `${technology.name} is already added!`
      );
      return;
    }

    setStack((previous) => [
      ...previous,
      technology,
    ]);

    toast.success(
     `${technology.name} added to your stack!`
    );
  };

  // Remove one
  const handleRemove = (id: string) => {
    const removedTechnology = stack.find(
      (item) => item.id === id
    );

    setStack((previous) =>
      previous.filter((item) => item.id !== id)
    );

    if (removedTechnology) {
      toast.info(
       ` ${removedTechnology.name} removed from your stack!`
      );
    }
  };

  // Remove all
  const handleRemoveAll = () => {
    if (stack.length === 0) {
      return;
    }

    setStack([]);

    toast.info("All technologies removed!");
  };

  return (
    <div className="min-h-screen bg-white">

      <Navbar />

      <Hero />

      <main
        id="technologies"
        className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
      >

        <div className="mb-8">
          <h2 className="text-3xl font-bold text-slate-900">
            Explore the{" "}
            <span className="bg-gradient-to-r from-orange-500 via-pink-500 to-violet-600 bg-clip-text text-transparent">
              Technologies
            </span>
          </h2>

          <p className="mt-2 text-sm text-gray-500">
            Pick one technology per category to build your ideal stack.
          </p>
        </div>

        {/* Loading */}
        {loading ? (
          <div className="flex min-h-60 items-center justify-center">
            <div className="text-center">
              <div className="mx-auto h-10 w-10 animate-spin rounded-full border-4 border-gray-200 border-t-pink-500" />

              <p className="mt-4 text-sm text-gray-500">
                Loading technologies...
              </p>
            </div>
          </div>
        ) : (

          /*
            Desktop:
            3 columns technology + 1 column sidebar

            Tablet:
            2 columns

            Mobile:
            1 column
          */
          <div className="grid gap-6 lg:grid-cols-4">

            {/* Technology Cards */}
            <div className="grid gap-5 sm:grid-cols-2 lg:col-span-3 lg:grid-cols-3">

              {technologies.map((technology) => (
                <TechnologyCard
                  key={technology.id}
                  technology={technology}
                  isAdded={stack.some(
                    (item) => item.id === technology.id
                  )}
                  onAdd={handleAdd}
                />
              ))}

            </div>

            {/* Your Stack */}
            <div className="lg:col-span-1">
              <StackSidebar
                stack={stack}
                onRemove={handleRemove}
                onRemoveAll={handleRemoveAll}
              />
            </div>

          </div>
        )}

      </main>

      <Footer />

      <ToastContainer
        position="top-right"
        autoClose={2000}
        newestOnTop
        closeOnClick
        pauseOnHover
      />

    </div>
  );
}

export default App;