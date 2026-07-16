import {
  FaUser,
  FaGraduationCap,
  FaBriefcase,
  FaCode,
  FaProjectDiagram,
  FaCertificate,
} from "react-icons/fa";

const items = [
  { icon: <FaUser />, label: "Personal" },
  { icon: <FaGraduationCap />, label: "Education" },
  { icon: <FaBriefcase />, label: "Experience" },
  { icon: <FaCode />, label: "Skills" },
  { icon: <FaProjectDiagram />, label: "Projects" },
  { icon: <FaCertificate />, label: "Certificates" },
];

export default function BuilderSidebar() {
  return (
    <aside className="w-64 bg-zinc-900 text-white p-6">
      <h1 className="text-2xl font-bold mb-8">ForgeOS</h1>

      <div className="space-y-3">
        {items.map((item) => (
          <button
            key={item.label}
            className="flex items-center gap-3 w-full rounded-xl px-4 py-3 hover:bg-zinc-800 transition"
          >
            {item.icon}
            <span>{item.label}</span>
          </button>
        ))}
      </div>
    </aside>
  );
}