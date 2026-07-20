import { useResume } from "../../../../context/ResumeContext";
import { Mail, Phone, Globe, Link, MapPin } from "lucide-react";

export default function ModernTemplate() {
  const { resumeData } = useResume();

  return (
    <div className="max-w-[800px] mx-auto bg-white shadow-2xl min-h-[1100px] p-12">
      {/* ================= HEADER ================= */}

      <div className="flex items-start gap-8 mb-8">
        {resumeData.personal.photo && (
          <img
            src={resumeData.personal.photo}
            alt="Profile"
            className="w-28 h-28 rounded-full object-cover border-2 border-gray-300 shadow-md flex-shrink-0"
          />
        )}

        <div className="flex-1">
          <h1 className="text-5xl font-bold">
            {resumeData.personal.fullName || "Your Name"}
          </h1>

          <p className="text-xl text-gray-500 mt-2">
            {resumeData.personal.title || "Professional Title"}
          </p>

          <div className="grid grid-cols-2 gap-x-10 gap-y-3 mt-6 text-sm">
            <div className="flex items-center gap-2">
              <Mail size={16} />
              <span>{resumeData.personal.email || "example@email.com"}</span>
            </div>

            <div className="flex items-center gap-2">
              <Phone size={16} />
              <span>{resumeData.personal.phone || "+91 9876543210"}</span>
            </div>

            {resumeData.personal.location && (
              <div className="flex items-center gap-2">
                <MapPin size={16} />
                <span>{resumeData.personal.location}</span>
              </div>
            )}

            {resumeData.personal.linkedin && (
              <div className="flex items-center gap-2 col-span-2">
                <Link size={16} />

                <a
                  href={resumeData.personal.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="break-all"
                >
                  {resumeData.personal.linkedin}
                </a>
              </div>
            )}

            {resumeData.personal.portfolio && (
              <div className="flex items-center gap-2 col-span-2">
                <Globe size={16} />

                <a
                  href={resumeData.personal.portfolio}
                  target="_blank"
                  rel="noreferrer"
                  className="break-all"
                >
                  {resumeData.personal.portfolio}
                </a>
              </div>
            )}
          </div>
        </div>
      </div>

      <hr className="my-8" />

      {/* ================= SUMMARY ================= */}

      <h2 className="text-2xl font-bold mb-3">Professional Summary</h2>

      <p className="text-gray-600 leading-7 whitespace-pre-wrap break-words">
        {resumeData.personal.summary || "Write your professional summary here."}
      </p>

      <hr className="my-8" />

      {/* ================= EXPERIENCE ================= */}

      <h2 className="text-2xl font-bold mb-5">Experience</h2>

      {resumeData.experience.map((exp) => (
        <div key={exp.id} className="mb-6">
          <h3 className="text-lg font-semibold">
            {exp.position || "Job Title"}
          </h3>

          <p className="text-gray-700">{exp.company || "Company"}</p>

          <p className="text-sm text-gray-500">
            {exp.startDate || "Start"} - {exp.endDate || "Present"}
          </p>

          {exp.description && (
            <p className="mt-2 text-gray-600 whitespace-pre-wrap">
              {exp.description}
            </p>
          )}
        </div>
      ))}

      <hr className="my-8" />

      {/* ================= SKILLS ================= */}

      <h2 className="text-2xl font-bold mb-5">Skills</h2>

      <div className="flex flex-wrap gap-2">
        {resumeData.skills.map((skill) => (
          <span
            key={skill.id}
            className="px-3 py-1 rounded-full border text-sm font-medium"
          >
            {skill.name || "Skill"}
          </span>
        ))}
      </div>

      <hr className="my-8" />

      {/* ================= PROJECTS ================= */}

      <h2 className="text-2xl font-bold mb-5">Projects</h2>

      {resumeData.projects.map((project) => (
        <div key={project.id} className="mb-6">
          <h3 className="text-lg font-semibold">
            {project.title || "Project Title"}
          </h3>

          <p className="text-gray-700">{project.technologies}</p>

          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="block text-blue-600 hover:underline break-all"
            >
              GitHub: {project.github}
            </a>
          )}

          {project.liveDemo && (
            <a
              href={project.liveDemo}
              target="_blank"
              rel="noreferrer"
              className="block text-blue-600 hover:underline break-all"
            >
              Live Demo: {project.liveDemo}
            </a>
          )}

          {project.description && (
            <p className="mt-2 text-gray-600 whitespace-pre-wrap">
              {project.description}
            </p>
          )}
        </div>
      ))}

<hr className="my-8" />

{/* ================= EDUCATION ================= */}

<h2 className="text-2xl font-bold mb-5">
  Education
</h2>

{resumeData.education.map((edu) => (
  <div key={edu.id} className="mb-6">

    <h3 className="text-lg font-semibold">
      {edu.degree || "Degree"}
    </h3>

    <p className="text-gray-700">
      {edu.institute || "Institute"}
    </p>

    <p className="text-sm text-gray-500">
      {edu.startYear || "Start"} - {edu.endYear || "End"}
    </p>

    {edu.description && (
      <p className="mt-2 text-gray-600 whitespace-pre-wrap">
        {edu.description}
      </p>
    )}

  </div>
))}

<hr className="my-8" />

{/* ================= CERTIFICATES ================= */}

<h2 className="text-2xl font-bold mb-5">
  Certificates
</h2>

{resumeData.certificates.map((certificate) => (
  <div key={certificate.id} className="mb-5">

    <h3 className="font-semibold">
      {certificate.name || "Certificate"}
    </h3>

    <p className="text-gray-700">
      {certificate.issuer || "Issuer"}
    </p>

    <p className="text-sm text-gray-500">
      {certificate.year || "Year"}
    </p>

    {certificate.credentialUrl && (
      <a
        href={certificate.credentialUrl}
        target="_blank"
        rel="noreferrer"
        className="text-blue-600 hover:underline break-all"
      >
        {certificate.credentialUrl}
      </a>
    )}

  </div>
))}


    </div>
  );
}
