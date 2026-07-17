import { useResume } from "../../context/ResumeContext";

import {
  FaUser,
  FaGraduationCap,
  FaBriefcase,
  FaCode,
  FaProjectDiagram,
  FaCertificate,
} from "react-icons/fa";

const items = [
  {
    icon: <FaUser />,
    label: "Personal",
    id: "personal",
  },
  {
    icon: <FaBriefcase />,
    label: "Experience",
    id: "experience",
  },
  {
    icon: <FaCode />,
    label: "Skills",
    id: "skills",
  },
  {
    icon: <FaProjectDiagram />,
    label: "Projects",
    id: "projects",
  },
  {
    icon: <FaGraduationCap />,
    label: "Education",
    id: "education",
  },
  {
    icon: <FaCertificate />,
    label: "Certificates",
    id: "certificates",
  },
];

export default function BuilderSidebar() {
  const { activeSection, setActiveSection } = useResume();

  const handleClick = (id) => {
    setActiveSection(id);

    const builder = document.getElementById("builder-scroll");
    const preview = document.getElementById("preview-scroll");

    const builderSection = document.getElementById(id);
    const previewSection = document.getElementById(`preview-${id}`);

    if (builder && builderSection) {
      builder.scrollTo({
        top: builderSection.offsetTop - 20,
        behavior: "smooth",
      });
    }

    if (preview && previewSection) {
      preview.scrollTo({
        top: previewSection.offsetTop - 20,
        behavior: "smooth",
      });
    }
  };

  return (
    <aside className="w-64 bg-zinc-900 text-white p-6">
      <h1 className="text-2xl font-bold mb-8">ForgeOS</h1>

      <div className="space-y-3">
        {items.map((item) => (
          <button
            key={item.id}
            onClick={() => handleClick(item.id)}
            className={`flex items-center gap-3 w-full rounded-xl px-4 py-3 transition-all duration-300

            ${
              activeSection === item.id
                ? "bg-white text-black shadow-lg font-semibold"
                : "hover:bg-zinc-800"
            }`}
          >
            {item.icon}

            <span>{item.label}</span>
          </button>
        ))}
      </div>
    </aside>
  );
}
