import { Trash2 } from "lucide-react";
import useResumeUpdater from "../hooks/useResumeUpdater";
import SectionHeader from "../common/SectionHeader";
import InputField from "../common/InputField";

export default function SkillsSection() {
  const {
    resumeData,
    updateSection,
    addItem,
    deleteItem,
  } = useResumeUpdater();

  return (
    <div>
      <SectionHeader
        title="Skills"
        buttonText="+ Add Skill"
        onAdd={() =>
          addItem("skills", {
            id: Date.now(),
            name: "",
          })
        }
      />

      {resumeData.skills.map((skill, index) => (
        <div
          key={skill.id}
          className="border rounded-xl p-5 mb-6 shadow-sm hover:shadow-md transition"
        >
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-semibold text-lg">
              Skill {index + 1}
            </h3>

            <button
              type="button"
              onClick={() => deleteItem("skills", skill.id)}
              className="text-gray-400 hover:text-red-600 transition"
            >
              <Trash2 size={18} />
            </button>
          </div>

          <InputField
            placeholder="Skill Name"
            value={skill.name}
            onChange={(e) =>
              updateSection(
                "skills",
                index,
                "name",
                e.target.value
              )
            }
          />
        </div>
      ))}
    </div>
  );
}