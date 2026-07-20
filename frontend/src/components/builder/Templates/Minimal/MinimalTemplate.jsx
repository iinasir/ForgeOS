import { useResume } from "../../../../context/ResumeContext";

export default function MinimalTemplate() {
  const { resumeData } = useResume();

  return (
    <div className="max-w-[800px] mx-auto bg-white shadow-2xl min-h-[1100px] px-14 py-12">
      {/* ================= HEADER ================= */}

      <header>
        <h1 className="text-5xl font-bold tracking-tight">
          {resumeData.personal.fullName || "Your Name"}
        </h1>

        <p className="text-xl text-gray-500 mt-2">
          {resumeData.personal.title || "Professional Title"}
        </p>
      </header>

      {/* ================= CONTACT ================= */}

      <div className="mt-8 text-sm text-gray-600 flex flex-wrap gap-4">
        <span>{resumeData.personal.email || "example@email.com"}</span>

        <span>•</span>

        <span>{resumeData.personal.phone || "+91 9876543210"}</span>

        {resumeData.personal.location && (
          <>
            <span>•</span>
            <span>{resumeData.personal.location}</span>
          </>
        )}

        {resumeData.personal.linkedin && (
          <>
            <span>•</span>
            <span>{resumeData.personal.linkedin}</span>
          </>
        )}

        {resumeData.personal.portfolio && (
          <>
            <span>•</span>
            <span>{resumeData.personal.portfolio}</span>
          </>
        )}
      </div>

      <hr className="my-10 border-gray-300" />

      {/* ================= SUMMARY ================= */}

      <section className="mb-10">
        <h2 className="text-lg font-semibold uppercase tracking-widest mb-4">
          Professional Summary
        </h2>

        <p className="text-gray-700 leading-8 whitespace-pre-wrap break-words">
          {resumeData.personal.summary ||
            "Write your professional summary here."}
        </p>
      </section>

      <hr className="my-10 border-gray-300" />
      {/* ================= EXPERIENCE ================= */}

      <section className="mb-10">
        <h2 className="text-lg font-semibold uppercase tracking-widest mb-5">
          Experience
        </h2>

        {resumeData.experience.map((exp) => (
          <div key={exp.id} className="mb-8">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-xl font-semibold">
                  {exp.position || "Job Title"}
                </h3>

                <p className="text-gray-700">{exp.company || "Company"}</p>
              </div>

              <p className="text-sm text-gray-500 whitespace-nowrap">
                {exp.startDate || "Start"} - {exp.endDate || "Present"}
              </p>
            </div>

            {exp.description && (
              <p className="mt-3 text-gray-700 whitespace-pre-wrap leading-7">
                {exp.description}
              </p>
            )}
          </div>
        ))}
      </section>

      <hr className="my-10 border-gray-300" />

      {/* ================= PROJECTS ================= */}

      <section className="mb-10">
        <h2 className="text-lg font-semibold uppercase tracking-widest mb-5">
          Projects
        </h2>

        {resumeData.projects.map((project) => (
          <div key={project.id} className="mb-8">
            <h3 className="text-xl font-semibold">
              {project.title || "Project Title"}
            </h3>

            {project.technologies && (
              <p className="text-gray-600 mt-1">{project.technologies}</p>
            )}

            {project.description && (
              <p className="mt-3 text-gray-700 whitespace-pre-wrap leading-7">
                {project.description}
              </p>
            )}

            {project.github && (
              <p className="mt-2 text-sm break-all">GitHub: {project.github}</p>
            )}

            {project.liveDemo && (
              <p className="text-sm break-all">Live Demo: {project.liveDemo}</p>
            )}
          </div>
        ))}
      </section>

      <hr className="my-10 border-gray-300" />

      {/* ================= SKILLS ================= */}

      <section className="mb-10">
        <h2 className="text-lg font-semibold uppercase tracking-widest mb-5">
          Skills
        </h2>

        <div className="flex flex-wrap gap-3">
          {resumeData.skills.map((skill) => (
            <span
              key={skill.id}
              className="border border-gray-400 rounded-full px-4 py-2 text-sm"
            >
              {skill.name || "Skill"}
            </span>
          ))}
        </div>
      </section>

      <hr className="my-10 border-gray-300" />

      {/* ================= EDUCATION ================= */}

      <section className="mb-10">
        <h2 className="text-lg font-semibold uppercase tracking-widest mb-5">
          Education
        </h2>

        {resumeData.education.map((edu) => (
          <div key={edu.id} className="mb-7">
            <div className="flex justify-between">
              <div>
                <h3 className="text-lg font-semibold">
                  {edu.degree || "Degree"}
                </h3>

                <p className="text-gray-700">{edu.institute || "Institute"}</p>
              </div>

              <p className="text-sm text-gray-500">
                {edu.startYear || "Start"} - {edu.endYear || "End"}
              </p>
            </div>

            {edu.description && (
              <p className="mt-3 text-gray-700 whitespace-pre-wrap">
                {edu.description}
              </p>
            )}
          </div>
        ))}
      </section>

      <hr className="my-10 border-gray-300" />

      {/* ================= CERTIFICATES ================= */}

      <section>
        <h2 className="text-lg font-semibold uppercase tracking-widest mb-5">
          Certificates
        </h2>

        {resumeData.certificates.map((certificate) => (
          <div key={certificate.id} className="mb-6">
            <h3 className="font-semibold">
              {certificate.name || "Certificate"}
            </h3>

            <p className="text-gray-700">{certificate.issuer || "Issuer"}</p>

            <p className="text-sm text-gray-500">
              {certificate.year || "Year"}
            </p>

            {certificate.credentialUrl && (
              <p className="text-sm break-all mt-1">
                {certificate.credentialUrl}
              </p>
            )}
          </div>
        ))}
      </section>
    </div>
  );
}

