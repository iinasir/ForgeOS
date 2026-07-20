import { useResume } from "../../../context/ResumeContext";

export default function TemplateSelector() {
  const { resumeData, setResumeData } = useResume();

  const templates = [
    "modern",
    "executive",
    "minimal",
    "ats",
    "creative",
  ];

  const handleChange = (e) => {
    setResumeData((prev) => ({
      ...prev,
      resumeSettings: {
        ...prev.resumeSettings,
        template: e.target.value,
      },
    }));
  };

  return (
    <div className="bg-white rounded-2xl border p-5 mb-6 shadow-sm">
      <h3 className="text-lg font-semibold mb-3">
        Resume Template
      </h3>

      <select
        value={resumeData.resumeSettings.template}
        onChange={handleChange}
        className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:ring-2 focus:ring-black"
      >
        {templates.map((template) => (
          <option key={template} value={template}>
            {template.charAt(0).toUpperCase() +
              template.slice(1)}
          </option>
        ))}
      </select>
    </div>
  );
}