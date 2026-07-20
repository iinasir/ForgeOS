import { useResume } from "../../../context/ResumeContext";

const templates = [
  {
    id: "modern",
    name: "Modern",
  },
  {
    id: "executive",
    name: "Executive",
  },
  {
    id: "minimal",
    name: "Minimal",
  },
  {
    id: "ats",
    name: "ATS",
  },
  {
    id: "creative",
    name: "Creative",
  },
];

export default function TemplateSelector() {
  const { resumeData, setResumeData } = useResume();

  const currentTemplate =
    resumeData.resumeSettings?.template || "modern";

  const handleTemplateChange = (template) => {
    setResumeData((prev) => ({
      ...prev,
      resumeSettings: {
        ...prev.resumeSettings,
        template,
      },
    }));
  };

  return (
    <div className="border-b bg-white p-5">

      <h2 className="text-lg font-semibold mb-4">
        Resume Template
      </h2>

      <div className="grid grid-cols-2 gap-3">

        {templates.map((template) => (
          <button
            key={template.id}
            onClick={() => handleTemplateChange(template.id)}
            className={`rounded-lg border p-3 transition
              ${
                currentTemplate === template.id
                  ? "bg-black text-white border-black"
                  : "bg-white hover:bg-gray-100"
              }`}
          >
            {template.name}
          </button>
        ))}

      </div>

    </div>
  );
}