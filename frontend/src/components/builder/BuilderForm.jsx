import PersonalSection from "./sections/PersonalSection";
import EducationSection from "./sections/EducationSection";
import ExperienceSection from "./sections/ExperienceSection";
import ProjectsSection from "./sections/ProjectsSection";

export default function BuilderForm() {
  return (
    <div className="p-8 space-y-12">
      <PersonalSection />
      <EducationSection />
      <ExperienceSection />
      <ProjectsSection />
    </div>
  );
}