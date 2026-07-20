import { useResume } from "../../../../context/ResumeContext";
import {
  Mail,
  Phone,
  Globe,
  Link,
  MapPin,
} from "lucide-react";

export default function ExecutiveTemplate() {
  const { resumeData } = useResume();

  return (
    <div className="max-w-[900px] mx-auto bg-white shadow-2xl min-h-[1100px]">

      {/* ================= HEADER ================= */}

      <div className="bg-slate-900 text-white px-10 py-10">

        <h1 className="text-4xl font-bold">
          {resumeData.personal.fullName || "Your Name"}
        </h1>

        <p className="text-xl text-slate-300 mt-2">
          {resumeData.personal.title || "Professional Title"}
        </p>

      </div>

      {/* ================= BODY ================= */}

      <div className="grid grid-cols-12">

        {/* ================= SIDEBAR ================= */}

        <aside className="col-span-4 bg-slate-800 text-white p-8 min-h-full">

          {resumeData.personal.photo && (
            <img
              src={resumeData.personal.photo}
              alt="Profile"
              className="w-40 h-40 object-cover rounded-lg mx-auto mb-8"
            />
          )}

          <h2 className="uppercase tracking-widest text-sm font-bold mb-5 border-b border-slate-600 pb-2">
            Contact
          </h2>

          <div className="space-y-4 text-sm">

            <div className="flex gap-3">
              <Mail size={16} />
              <span className="break-all">
                {resumeData.personal.email || "example@email.com"}
              </span>
            </div>

            <div className="flex gap-3">
              <Phone size={16} />
              <span>
                {resumeData.personal.phone || "+91 9876543210"}
              </span>
            </div>

            {resumeData.personal.location && (
              <div className="flex gap-3">
                <MapPin size={16} />
                <span>{resumeData.personal.location}</span>
              </div>
            )}

            {resumeData.personal.linkedin && (
              <div className="flex gap-3">
                <Link size={16} />

                <a
                  href={resumeData.personal.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="break-all hover:underline"
                >
                  {resumeData.personal.linkedin}
                </a>
              </div>
            )}

            {resumeData.personal.portfolio && (
              <div className="flex gap-3">
                <Globe size={16} />

                <a
                  href={resumeData.personal.portfolio}
                  target="_blank"
                  rel="noreferrer"
                  className="break-all hover:underline"
                >
                  {resumeData.personal.portfolio}
                </a>
              </div>
            )}

          </div>

          <div className="mt-10">

            <h2 className="uppercase tracking-widest text-sm font-bold mb-5 border-b border-slate-600 pb-2">
              Skills
            </h2>

            <div className="space-y-3">

              {resumeData.skills.map((skill) => (
                <div key={skill.id}>
                  ✓ {skill.name || "Skill"}
                </div>
              ))}

            </div>

          </div>

        </aside>

        {/* ================= MAIN CONTENT ================= */}

        <main className="col-span-8 p-10">
                    {/* ================= SUMMARY ================= */}

          <section className="mb-10">

            <h2 className="uppercase tracking-widest text-sm font-bold text-slate-700 border-b-2 border-slate-700 pb-2 mb-4">
              Professional Summary
            </h2>

            <p className="text-gray-600 leading-7 whitespace-pre-wrap">
              {resumeData.personal.summary ||
                "Write your professional summary here."}
            </p>

          </section>

          {/* ================= EXPERIENCE ================= */}

          <section className="mb-10">

            <h2 className="uppercase tracking-widest text-sm font-bold text-slate-700 border-b-2 border-slate-700 pb-2 mb-5">
              Experience
            </h2>

            {resumeData.experience.map((exp) => (
              <div key={exp.id} className="mb-7">

                <h3 className="text-xl font-semibold">
                  {exp.position || "Job Title"}
                </h3>

                <p className="font-medium text-slate-700">
                  {exp.company || "Company"}
                </p>

                <p className="text-sm text-gray-500 mb-2">
                  {exp.startDate || "Start"} - {exp.endDate || "Present"}
                </p>

                {exp.description && (
                  <p className="text-gray-600 whitespace-pre-wrap">
                    {exp.description}
                  </p>
                )}

              </div>
            ))}

          </section>

          {/* ================= PROJECTS ================= */}

          <section className="mb-10">

            <h2 className="uppercase tracking-widest text-sm font-bold text-slate-700 border-b-2 border-slate-700 pb-2 mb-5">
              Projects
            </h2>

            {resumeData.projects.map((project) => (
              <div key={project.id} className="mb-7">

                <h3 className="text-lg font-semibold">
                  {project.title || "Project Title"}
                </h3>

                <p className="text-gray-700">
                  {project.technologies}
                </p>

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

          </section>

          {/* ================= EDUCATION ================= */}

          <section className="mb-10">

            <h2 className="uppercase tracking-widest text-sm font-bold text-slate-700 border-b-2 border-slate-700 pb-2 mb-5">
              Education
            </h2>

            {resumeData.education.map((edu) => (
              <div key={edu.id} className="mb-6">

                <h3 className="font-semibold text-lg">
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

          </section>

          {/* ================= CERTIFICATES ================= */}

          <section>

            <h2 className="uppercase tracking-widest text-sm font-bold text-slate-700 border-b-2 border-slate-700 pb-2 mb-5">
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

          </section>

        </main>

      </div>

    </div>

  );
}

