import { Trash2 } from "lucide-react";
import useResumeUpdater from "../hooks/useResumeUpdater";
import SectionHeader from "../common/SectionHeader";
import InputField from "../common/InputField";
import TextAreaField from "../common/TextAreaField";

export default function ProjectsSection() {
  const {
    resumeData,
    updateSection,
    addItem,
    deleteItem,
  } = useResumeUpdater();

  return (
    <div>
      <SectionHeader
        title="Projects"
        buttonText="+ Add Project"
        onAdd={() =>
          addItem("projects", {
            id: Date.now(),
            title: "",
            technologies: "",
            github:"",
            liveDemo: "",
            description: "",
          })
        }
      />

      {resumeData.projects.map((project, index) => (
        <div
          key={project.id}
          className="border rounded-xl p-5 mb-6 shadow-sm hover:shadow-md transition"
        >
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-semibold text-lg">
              Project {index + 1}
            </h3>

            <button
              onClick={() =>
                deleteItem("projects", project.id)
              }
              className="text-gray-400 hover:text-red-600 transition"
            >
              <Trash2 size={18} />
            </button>
          </div>

          <div className="space-y-4">
            <InputField
              placeholder="Project Title"
              value={project.title}
              onChange={(e) =>
                updateSection(
                  "projects",
                  index,
                  "title",
                  e.target.value
                )
              }
            />

            <InputField
              placeholder="Technologies Used"
              value={project.technologies}
              onChange={(e) =>
                updateSection(
                  "projects",
                  index,
                  "technologies",
                  e.target.value
                )
              }
            />

            <InputField
              placeholder="Project Link (Optional)"
              value={project.link}
              onChange={(e) =>
                updateSection(
                  "projects",
                  index,
                  "link",
                  e.target.value
                )
              }
            />

            <TextAreaField
              rows={4}
              placeholder="Project Description"
              value={project.description}
              onChange={(e) =>
                updateSection(
                  "projects",
                  index,
                  "description",
                  e.target.value
                )
              }
            />
          </div>
        </div>
      ))}
    </div>
  );
}