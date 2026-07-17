import { useEffect } from "react";
import { useResume } from "../../context/ResumeContext";

import PersonalSection from "./sections/PersonalSection";
import EducationSection from "./sections/EducationSection";
import ExperienceSection from "./sections/ExperienceSection";
import ProjectsSection from "./sections/ProjectsSection";
import SkillsSection from "./sections/SkillsSection";
import CertificatesSection from "./sections/CertificatesSection";

export default function BuilderForm() {
  const { setActiveSection } = useResume();

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        threshold: 0.35,
      }
    );

    sections.forEach((section) =>
      observer.observe(section)
    );

    return () => observer.disconnect();
  }, [setActiveSection]);

  return (
    <div className="p-8 space-y-12">

      <section id="personal">
        <PersonalSection />
      </section>

      <section id="experience">
        <ExperienceSection />
      </section>

      <section id="skills">
        <SkillsSection />
      </section>

      <section id="projects">
        <ProjectsSection />
      </section>

      <section id="education">
        <EducationSection />
      </section>

      <section id="certificates">
        <CertificatesSection />
      </section>

    </div>
  );
}
