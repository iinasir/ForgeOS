import { useResume } from "../../../../context/ResumeContext";
import {
  Mail,
  Phone,
  MapPin,
  Globe,
  Link,
} from "lucide-react";

export default function CreativeTemplate() {
  const { resumeData } = useResume();

  return (
    <div className="max-w-[850px] mx-auto bg-white shadow-2xl rounded-2xl overflow-hidden">

      {/* ================= HERO ================= */}

      <div className="bg-indigo-600 text-white p-10">

        <div className="flex gap-8 items-center">

          {resumeData.personal.photo && (

            <img
              src={resumeData.personal.photo}
              alt="Profile"
              className="w-36 h-36 rounded-full object-cover border-4 border-white"
            />

          )}

          <div>

            <h1 className="text-5xl font-bold">
              {resumeData.personal.fullName || "Your Name"}
            </h1>

            <p className="text-indigo-100 text-xl mt-2">
              {resumeData.personal.title || "Professional Title"}
            </p>

          </div>

        </div>

      </div>

      {/* ================= BODY ================= */}

      <div className="p-10">

        {/* CONTACT */}

        <div className="grid grid-cols-2 gap-4 text-sm mb-10">

          <div className="flex items-center gap-2">
            <Mail size={16} />
            {resumeData.personal.email}
          </div>

          <div className="flex items-center gap-2">
            <Phone size={16} />
            {resumeData.personal.phone}
          </div>

          {resumeData.personal.location && (
            <div className="flex items-center gap-2">
              <MapPin size={16} />
              {resumeData.personal.location}
            </div>
          )}

          {resumeData.personal.linkedin && (
            <div className="flex items-center gap-2">
              <Link size={16} />
              {resumeData.personal.linkedin}
            </div>
          )}

          {resumeData.personal.portfolio && (
            <div className="flex items-center gap-2 col-span-2">
              <Globe size={16} />
              {resumeData.personal.portfolio}
            </div>
          )}

        </div>

        {/* SUMMARY */}

        <div className="mb-10">

          <h2 className="text-2xl font-bold text-indigo-600 mb-4">
            Professional Summary
          </h2>

          <p className="leading-8 whitespace-pre-wrap">
            {resumeData.personal.summary ||
              "Write your professional summary here."}
          </p>

        </div>
                {/* ================= EXPERIENCE ================= */}

        <div className="mb-10">

          <h2 className="text-2xl font-bold text-indigo-600 mb-5">
            Experience
          </h2>

          {resumeData.experience.map((exp) => (
            <div
              key={exp.id}
              className="bg-gray-50 rounded-xl border p-6 mb-5 shadow-sm"
            >

              <div className="flex justify-between items-start">

                <div>

                  <h3 className="text-xl font-semibold">
                    {exp.position || "Job Title"}
                  </h3>

                  <p className="text-gray-600">
                    {exp.company || "Company"}
                  </p>

                </div>

                <p className="text-sm text-gray-500">
                  {exp.startDate || "Start"} - {exp.endDate || "Present"}
                </p>

              </div>

              {exp.description && (
                <p className="mt-4 leading-7 whitespace-pre-wrap">
                  {exp.description}
                </p>
              )}

            </div>
          ))}

        </div>

        {/* ================= PROJECTS ================= */}

        <div className="mb-10">

          <h2 className="text-2xl font-bold text-indigo-600 mb-5">
            Projects
          </h2>

          {resumeData.projects.map((project) => (
            <div
              key={project.id}
              className="bg-gray-50 rounded-xl border p-6 mb-5 shadow-sm"
            >

              <h3 className="text-xl font-semibold">
                {project.title || "Project Title"}
              </h3>

              {project.technologies && (
                <p className="text-gray-600 mt-2">
                  {project.technologies}
                </p>
              )}

              {project.description && (
                <p className="mt-4 whitespace-pre-wrap leading-7">
                  {project.description}
                </p>
              )}

              {project.github && (
                <p className="mt-3 text-sm break-all">
                  GitHub: {project.github}
                </p>
              )}

              {project.liveDemo && (
                <p className="text-sm break-all">
                  Live Demo: {project.liveDemo}
                </p>
              )}

            </div>
          ))}

        </div>

        {/* ================= SKILLS ================= */}

        <div className="mb-10">

          <h2 className="text-2xl font-bold text-indigo-600 mb-5">
            Skills
          </h2>

          <div className="flex flex-wrap gap-3">

            {resumeData.skills.map((skill) => (
              <span
                key={skill.id}
                className="bg-indigo-100 text-indigo-700 px-4 py-2 rounded-full text-sm font-medium"
              >
                {skill.name || "Skill"}
              </span>
            ))}

          </div>

        </div>

        {/* ================= EDUCATION ================= */}

        <div className="mb-10">

          <h2 className="text-2xl font-bold text-indigo-600 mb-5">
            Education
          </h2>

          {resumeData.education.map((edu) => (
            <div
              key={edu.id}
              className="bg-gray-50 rounded-xl border p-6 mb-5 shadow-sm"
            >

              <div className="flex justify-between">

                <div>

                  <h3 className="text-lg font-semibold">
                    {edu.degree || "Degree"}
                  </h3>

                  <p className="text-gray-600">
                    {edu.institute || "Institute"}
                  </p>

                </div>

                <p className="text-sm text-gray-500">
                  {edu.startYear || "Start"} - {edu.endYear || "End"}
                </p>

              </div>

              {edu.description && (
                <p className="mt-4 whitespace-pre-wrap leading-7">
                  {edu.description}
                </p>
              )}

            </div>
          ))}

        </div>

        {/* ================= CERTIFICATES ================= */}

        <div>

          <h2 className="text-2xl font-bold text-indigo-600 mb-5">
            Certificates
          </h2>

          {resumeData.certificates.map((certificate) => (
            <div
              key={certificate.id}
              className="bg-gray-50 rounded-xl border p-6 mb-5 shadow-sm"
            >

              <h3 className="font-semibold">
                {certificate.name || "Certificate"}
              </h3>

              <p className="text-gray-600">
                {certificate.issuer || "Issuer"}
              </p>

              <p className="text-sm text-gray-500">
                {certificate.year || "Year"}
              </p>

              {certificate.credentialUrl && (
                <p className="mt-2 text-sm break-all">
                  {certificate.credentialUrl}
                </p>
              )}

            </div>
          ))}

        </div>

      </div>

    </div>
  );
}