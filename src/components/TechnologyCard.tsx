import type { Technology } from "../types/technology";

interface TechnologyCardProps {
  technology: Technology;
  isAdded: boolean;
  onAdd: (technology: Technology) => void;
}

function TechnologyCard({
  technology,
  isAdded,
  onAdd,
}: TechnologyCardProps) {
  const getBorderColor = () => {
    if (!isAdded) {
      return "border-gray-200";
    }

    switch (technology.id) {
      case "react":
        return "border-cyan-400";
      case "vue":
        return "border-green-500";
      case "svelte":
        return "border-orange-500";
      case "nextjs":
        return "border-black";
      case "nodejs":
        return "border-green-600";
      case "postgresql":
        return "border-blue-500";
      case "redis":
        return "border-red-500";
      case "javascript":
        return "border-yellow-400";
      case "typescript":
        return "border-blue-600";
      case "java":
        return "border-red-600";
      case "tailwind":
        return "border-sky-400";
      case "docker":
        return "border-blue-500";
      default:
        return "border-purple-500";
    }
  };

  return (
    <div
      className={`flex min-h-[330px] flex-col rounded-2xl border-2 bg-white p-4 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md ${getBorderColor()}`}
    >
      <div className="flex items-start justify-between">
        <img
          src={technology.icon}
          alt={technology.name}
          className="h-12 w-12 object-contain"
        />

        <span className="rounded-full bg-pink-50 px-3 py-1 text-xs font-medium text-pink-600">
          {technology.badge}
        </span>
      </div>

      <h3 className="mt-5 text-lg font-bold text-slate-900">
        {technology.name}
      </h3>

      <p className="mt-2 flex-1 text-sm leading-6 text-gray-500">
        {technology.description}
      </p>

      <div className="mt-4 flex items-center justify-between text-xs text-gray-500">
        <span className="rounded-md bg-gray-50 px-2 py-2">
          {technology.category}
        </span>

        <span>{technology.difficulty}</span>

        <span className="font-medium text-gray-700">
          ⭐ {technology.rating}
        </span>
      </div>

      <button
        onClick={() => onAdd(technology)}
        disabled={isAdded}
        className={`mt-4 w-full rounded-lg py-3 text-sm font-semibold transition ${
          isAdded
            ? "cursor-not-allowed bg-gray-200"
            : "bg-slate-950 text-white hover:bg-slate-800"
        }`}
      >
        {isAdded ? (
          <span className="bg-gradient-to-r from-red-500 via-yellow-400 via-green-500 to-blue-500 bg-clip-text text-transparent">
            ✓ Added to Stack
          </span>
        ) : (
          "Add to Stack"
        )}
      </button>
    </div>
  );
}

export default TechnologyCard;