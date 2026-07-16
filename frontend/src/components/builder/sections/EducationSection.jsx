import { Trash2 } from "lucide-react";
import useResumeUpdater from "../hooks/useResumeUpdater";
import SectionHeader from "../common/SectionHeader";
import InputField from "../common/InputField";
import TextAreaField from "../common/TextAreaField";

export default function EducationSection() {
  const {
    resumeData,
    updateSection,
    addItem,
    deleteItem,
  } = useResumeUpdater();

  return (
    <div>
      <SectionHeader
        title="Education"
        buttonText="+ Add Education"
        onAdd={() =>
          addItem("education", {
            id: Date.now(),
            institute: "",
            degree: "",
            startYear: "",
            endYear: "",
            description: "",
          })
        }
      />

      {resumeData.education.map((edu, index) => (
        <div
          key={edu.id}
          className="border rounded-xl p-5 mb-6 shadow-sm hover:shadow-md transition"
        >
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-semibold text-lg">
              Education {index + 1}
            </h3>

            <button
              onClick={() => deleteItem("education", edu.id)}
              className="text-gray-400 hover:text-red-600 transition"
              type="button"
            >
              <Trash2 size={18} />
            </button>
          </div>

          <div className="space-y-4">
            <InputField
              placeholder="Institute"
              value={edu.institute}
              onChange={(e) =>
                updateSection(
                  "education",
                  index,
                  "institute",
                  e.target.value
                )
              }
            />

            <InputField
              placeholder="Degree"
              value={edu.degree}
              onChange={(e) =>
                updateSection(
                  "education",
                  index,
                  "degree",
                  e.target.value
                )
              }
            />

            <div className="flex gap-4">
              <InputField
                placeholder="Start Year"
                value={edu.startYear}
                onChange={(e) =>
                  updateSection(
                    "education",
                    index,
                    "startYear",
                    e.target.value
                  )
                }
              />

              <InputField
                placeholder="End Year"
                value={edu.endYear}
                onChange={(e) =>
                  updateSection(
                    "education",
                    index,
                    "endYear",
                    e.target.value
                  )
                }
              />
            </div>

            <TextAreaField
              rows={3}
              placeholder="Description"
              value={edu.description}
              onChange={(e) =>
                updateSection(
                  "education",
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