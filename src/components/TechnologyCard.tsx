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
  return (
    <div className="flex min-h-[330px] flex-col rounded-2xl border border-gray-200 bg-white p-4 shadow-sm transition hover:-translate-y-1 hover:shadow-md">

      {/* Top */}
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

      {/* Name */}
      <h3 className="mt-5 text-lg font-bold text-slate-900">
        {technology.name}
      </h3>

      {/* Description */}
      <p className="mt-2 flex-1 text-sm leading-6 text-gray-500">
        {technology.description}
      </p>

      {/* Info */}
      <div className="mt-4 flex items-center justify-between text-xs text-gray-500">
        <span className="rounded-md bg-gray-50 px-2 py-1">
          {technology.category}
        </span>

        <span>{technology.difficulty}</span>

        <span className="font-medium text-gray-700">
          ⭐ {technology.rating}
        </span>
      </div>

      {/* Button */}
      <button
        onClick={() => onAdd(technology)}
        disabled={isAdded}
        className={`mt-4 w-full rounded-lg py-3 text-sm font-semibold transition ${
          isAdded
            ? "cursor-not-allowed bg-gray-200 text-gray-500"
            : "bg-slate-950 text-white hover:bg-slate-800"
        }`}
      >
        {isAdded ? "✓ Added to Stack" : "Add to Stack"}
      </button>
    </div>
  );
}

export default TechnologyCard;