import type { Technology } from "../types/technology";

interface StackSidebarProps {
  stack: Technology[];
  onRemove: (id: string) => void;
  onRemoveAll: () => void;
}

function StackSidebar({
  stack,
  onRemove,
  onRemoveAll,
}: StackSidebarProps) {
  return (
    <aside className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">

      <h2 className="text-2xl font-bold text-slate-900">
        Your Stack
      </h2>

      <p className="mt-1 text-sm text-gray-400">
        {stack.length === 0
          ? "No technologies selected yet."
          : `${stack.length} Technology${
              stack.length > 1 ? "ies" : "y"
            } Selected`}
      </p>

      {/* Empty */}
      {stack.length === 0 ? (
        <div className="mt-8 flex min-h-44 items-center justify-center rounded-2xl border border-dashed border-gray-200 px-5 text-center text-gray-400">
          Your stack is empty.
        </div>
      ) : (
        <div className="mt-6 space-y-3">

          {stack.map((technology) => (
            <div
              key={technology.id}
              className="flex items-center justify-between rounded-xl border border-gray-200 p-4"
            >
              <div className="flex items-center gap-3">

                <img
                  src={technology.icon}
                  alt={technology.name}
                  className="h-10 w-10 object-contain"
                />

                <div>
                  <h3 className="font-semibold text-slate-900">
                    {technology.name}
                  </h3>

                  <p className="text-xs text-gray-400">
                    {technology.category}
                  </p>
                </div>

              </div>

              <button
                onClick={() => onRemove(technology.id)}
                className="text-2xl text-gray-400 hover:text-red-500"
                aria-label={`Remove ${technology.name}`}
              >
                ×
              </button>
            </div>
          ))}

        </div>
      )}

      {/* Remove All */}
      <button
        onClick={onRemoveAll}
        disabled={stack.length === 0}
        className="mt-8 w-full rounded-xl border border-red-200 py-3 font-semibold text-red-500 transition hover:bg-red-50 disabled:cursor-not-allowed disabled:opacity-40"
      >
        Remove All
      </button>

    </aside>
  );
}

export default StackSidebar;