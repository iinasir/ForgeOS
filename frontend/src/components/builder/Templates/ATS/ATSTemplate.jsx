import { useResume } from "../../../../context/ResumeContext";

export default function ATSTemplate() {
  const { resumeData } = useResume();

  return (
    <div className="max-w-[800px] mx-auto bg-white min-h-[1100px] px-10 py-10 text-black text-[15px] leading-7">

      {/* HEADER */}

      <h1 className="text-3xl font-bold uppercase">
        {resumeData.personal.fullName || "YOUR NAME"}
      </h1>

      <p className="text-lg mt-1">
        {resumeData.personal.title || "Professional Title"}
      </p>

      <div className="mt-5 space-y-1">

        <p>
          <strong>Email:</strong>{" "}
          {resumeData.personal.email}
        </p>

        <p>
          <strong>Phone:</strong>{" "}
          {resumeData.personal.phone}
        </p>

        {resumeData.personal.location && (
          <p>
            <strong>Location:</strong>{" "}
            {resumeData.personal.location}
          </p>
        )}

        {resumeData.personal.linkedin && (
          <p>
            <strong>LinkedIn:</strong>{" "}
            {resumeData.personal.linkedin}
          </p>
        )}

        {resumeData.personal.portfolio && (
          <p>
            <strong>Portfolio:</strong>{" "}
            {resumeData.personal.portfolio}
          </p>
        )}

      </div>

      <hr className="my-6 border-black" />

      {/* SUMMARY */}

      <section>

        <h2 className="font-bold uppercase mb-2">
          Professional Summary
        </h2>

        <p className="whitespace-pre-wrap">
          {resumeData.personal.summary ||
            "Write your professional summary here."}
        </p>

      </section>

      <hr className="my-6 border-black" />

      {/* EXPERIENCE */}

      <section>

        <h2 className="font-bold uppercase mb-4">
          Experience
        </h2>
                {resumeData.experience.map((exp) => (
          <div key={exp.id} className="mb-6">

            <h3 className="font-bold">
              {exp.position || "Job Title"}
            </h3>

            <p className="italic">
              {exp.company || "Company"}
            </p>

            <p className="text-sm mb-2">
              {exp.startDate || "Start"} - {exp.endDate || "Present"}
            </p>

            {exp.description && (
              <ul className="list-disc ml-6 space-y-1">
                {exp.description
                  .split("\n")
                  .filter(line => line.trim() !== "")
                  .map((line, index) => (
                    <li key={index}>{line}</li>
                  ))}
              </ul>
            )}

          </div>
        ))}

      </section>

      <hr className="my-6 border-black" />

      {/* PROJECTS */}

      <section>

        <h2 className="font-bold uppercase mb-4">
          Projects
        </h2>

        {resumeData.projects.map((project) => (
          <div key={project.id} className="mb-6">

            <h3 className="font-bold">
              {project.title || "Project"}
            </h3>

            {project.technologies && (
              <p className="italic">
                {project.technologies}
              </p>
            )}

            {project.description && (
              <ul className="list-disc ml-6 mt-2 space-y-1">
                {project.description
                  .split("\n")
                  .filter(line => line.trim() !== "")
                  .map((line, index) => (
                    <li key={index}>{line}</li>
                  ))}
              </ul>
            )}

            {project.github && (
              <p className="text-sm mt-2 break-all">
                GitHub: {project.github}
              </p>
            )}

            {project.liveDemo && (
              <p className="text-sm break-all">
                Live: {project.liveDemo}
              </p>
            )}

          </div>
        ))}

      </section>

      <hr className="my-6 border-black" />

      {/* SKILLS */}

      <section>

        <h2 className="font-bold uppercase mb-4">
          Skills
        </h2>

        <ul className="list-disc ml-6 space-y-1">

          {resumeData.skills.map((skill) => (
            <li key={skill.id}>
              {skill.name || "Skill"}
            </li>
          ))}

        </ul>

      </section>

      <hr className="my-6 border-black" />

      {/* EDUCATION */}

      <section>

        <h2 className="font-bold uppercase mb-4">
          Education
        </h2>

        {resumeData.education.map((edu) => (
          <div key={edu.id} className="mb-5">

            <h3 className="font-bold">
              {edu.degree || "Degree"}
            </h3>

            <p>
              {edu.institute || "Institute"}
            </p>

            <p className="text-sm">
              {edu.startYear || "Start"} - {edu.endYear || "End"}
            </p>

            {edu.description && (
              <p className="mt-2">
                {edu.description}
              </p>
            )}

          </div>
        ))}

      </section>

      <hr className="my-6 border-black" />

      {/* CERTIFICATES */}

      <section>

        <h2 className="font-bold uppercase mb-4">
          Certificates
        </h2>

        {resumeData.certificates.map((certificate) => (
          <div key={certificate.id} className="mb-4">

            <h3 className="font-bold">
              {certificate.name || "Certificate"}
            </h3>

            <p>
              {certificate.issuer || "Issuer"}
            </p>

            <p className="text-sm">
              {certificate.year || "Year"}
            </p>

            {certificate.credentialUrl && (
              <p className="text-sm break-all">
                {certificate.credentialUrl}
              </p>
            )}

          </div>
        ))}

      </section>

    </div>
  );
}