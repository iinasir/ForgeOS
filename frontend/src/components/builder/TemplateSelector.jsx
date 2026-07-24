import { useResume } from "../../context/ResumeContext";

const templates = [
  {
    id: "modern",
    title: "Modern",
    subtitle: "General Purpose",
  },
  {
    id: "executive",
    title: "Executive",
    subtitle: "Corporate Leaders",
  },
  {
    id: "minimal",
    title: "Minimal",
    subtitle: "Apple Inspired",
  },
  {
    id: "ats",
    title: "ATS",
    subtitle: "98% ATS Friendly",
  },
  {
    id: "creative",
    title: "Creative",
    subtitle: "Portfolio Style",
  },
];

export default function TemplateSelector() {
  const { resumeData, setResumeData } = useResume();

  const currentTemplate = resumeData.resumeSettings?.template || "modern";

  function changeTemplate(template) {
    setResumeData((prev) => ({
      ...prev,

      resumeSettings: {
        ...prev.resumeSettings,
        template,
      },
    }));
  }

  return (
    <div className="mb-8">
      <div className="mb-6">
        <h2 className="text-2xl font-bold">Choose Resume Template</h2>

        <p className="text-gray-500 mt-1">
          Pick the template that best matches your career.
        </p>
      </div>

      <div className="flex gap-6 overflow-x-auto pb-4">
        {templates.map((template) => {
          const selected = currentTemplate === template.id;

          return (
            <button
              key={template.id}
              onClick={() => changeTemplate(template.id)}
              className={`
                min-w-[170px]
                bg-white
                rounded-2xl
                shadow-lg
                border-2
                transition-all
                duration-300
                hover:-translate-y-1
                hover:shadow-xl

                ${
                  selected
                    ? "border-indigo-600 ring-2 ring-indigo-200"
                    : "border-transparent"
                }
              `}
            >
              {/* Thumbnail */}
              <div className="h-28 rounded-t-2xl bg-gradient-to-br from-indigo-500 via-indigo-400 to-purple-500 flex items-center justify-center">
                <div className="w-32 h-20 rounded-lg bg-white shadow-md p-2">
                  <div className="h-2 w-16 bg-gray-800 rounded mb-2"></div>

                  <div className="h-1.5 w-24 bg-gray-300 rounded mb-1"></div>

                  <div className="h-1.5 w-20 bg-gray-300 rounded mb-3"></div>

                  <div className="space-y-1">
                    <div className="h-1 bg-gray-200 rounded"></div>

                    <div className="h-1 bg-gray-200 rounded"></div>

                    <div className="h-1 bg-gray-200 rounded"></div>
                  </div>
                </div>
              </div>

              {/* Card Body */}

              <div className="p-5 text-left">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold">{template.title}</h3>

                  {selected && (
                    <span className="text-xs bg-indigo-600 text-white px-2 py-1 rounded-full">
                      Selected
                    </span>
                  )}
                </div>

                <p className="text-gray-500 text-sm mt-2">
                  {template.subtitle}
                </p>

                <div className="mt-5">
                  {selected ? (
                    <div className="text-indigo-600 font-medium text-sm">
                      ✓ Currently Selected
                    </div>
                  ) : (
                    <div className="text-gray-400 text-sm">
                      Click to Preview
                    </div>
                  )}
                </div>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}
