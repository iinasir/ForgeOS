import { Trash2 } from "lucide-react";
import useResumeUpdater from "../hooks/useResumeUpdater";
import SectionHeader from "../common/SectionHeader";
import InputField from "../common/InputField";
import TextAreaField from "../common/TextAreaField";

export default function ExperienceSection() {
  const {
    resumeData,
    updateSection,
    addItem,
    deleteItem,
  } = useResumeUpdater();

  return (
    <div>
      <SectionHeader
        title="Experience"
        buttonText="+ Add Experience"
        onAdd={() =>
          addItem("experience", {
            id: Date.now(),
            company: "",
            position: "",
            startDate: "",
            endDate: "",
            description: "",
          })
        }
      />

      {resumeData.experience.map((exp, index) => (
        <div
          key={exp.id}
          className="border rounded-xl p-5 mb-6 shadow-sm hover:shadow-md transition"
        >
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-semibold text-lg">
              Experience {index + 1}
            </h3>

            <button
              type="button"
              onClick={() => deleteItem("experience", exp.id)}
              className="text-gray-400 hover:text-red-600 transition"
            >
              <Trash2 size={18} />
            </button>
          </div>

          <div className="space-y-4">
            <InputField
              placeholder="Company Name"
              value={exp.company}
              onChange={(e) =>
                updateSection(
                  "experience",
                  index,
                  "company",
                  e.target.value
                )
              }
            />

            <InputField
              placeholder="Job Title"
              value={exp.position}
              onChange={(e) =>
                updateSection(
                  "experience",
                  index,
                  "position",
                  e.target.value
                )
              }
            />

            <div className="flex gap-4">
              <InputField
                placeholder="Start Date"
                value={exp.startDate}
                onChange={(e) =>
                  updateSection(
                    "experience",
                    index,
                    "startDate",
                    e.target.value
                  )
                }
              />

              <InputField
                placeholder="End Date"
                value={exp.endDate}
                onChange={(e) =>
                  updateSection(
                    "experience",
                    index,
                    "endDate",
                    e.target.value
                  )
                }
              />
            </div>

            <TextAreaField
              rows={3}
              placeholder="Job Description"
              value={exp.description}
              onChange={(e) =>
                updateSection(
                  "experience",
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