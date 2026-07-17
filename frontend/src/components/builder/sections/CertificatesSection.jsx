import { Trash2 } from "lucide-react";
import useResumeUpdater from "../hooks/useResumeUpdater";
import SectionHeader from "../common/SectionHeader";
import InputField from "../common/InputField";

export default function CertificatesSection() {
  const {
    resumeData,
    updateSection,
    addItem,
    deleteItem,
  } = useResumeUpdater();

  return (
    <div>
      <SectionHeader
        title="Certificates"
        buttonText="+ Add Certificate"
        onAdd={() =>
          addItem("certificates", {
            id: Date.now(),
            name: "",
            issuer: "",
            year: "",
            credentialUrl: "",
          })
        }
      />

      {resumeData.certificates.map((certificate, index) => (
        <div
          key={certificate.id}
          className="border rounded-xl p-5 mb-6 shadow-sm hover:shadow-md transition"
        >
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-semibold text-lg">
              Certificate {index + 1}
            </h3>

            <button
              type="button"
              onClick={() =>
                deleteItem("certificates", certificate.id)
              }
              className="text-gray-400 hover:text-red-600 transition"
            >
              <Trash2 size={18} />
            </button>
          </div>

          <div className="space-y-4">
            <InputField
              placeholder="Certificate Name"
              value={certificate.name}
              onChange={(e) =>
                updateSection(
                  "certificates",
                  index,
                  "name",
                  e.target.value
                )
              }
            />

            <InputField
              placeholder="Issued By"
              value={certificate.issuer}
              onChange={(e) =>
                updateSection(
                  "certificates",
                  index,
                  "issuer",
                  e.target.value
                )
              }
            />

            <div className="flex gap-4">
              <InputField
                placeholder="Year"
                value={certificate.year}
                onChange={(e) =>
                  updateSection(
                    "certificates",
                    index,
                    "year",
                    e.target.value
                  )
                }
              />

              <InputField
                placeholder="Credential URL (Optional)"
                value={certificate.credentialUrl}
                onChange={(e) =>
                  updateSection(
                    "certificates",
                    index,
                    "credentialUrl",
                    e.target.value
                  )
                }
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}