import useResumeUpdater from "../hooks/useResumeUpdater";
import InputField from "../common/InputField";
import TextAreaField from "../common/TextAreaField";

export default function PersonalSection() {
  const { resumeData, updatePersonal } = useResumeUpdater();

  return (
    <div>
      <h2 className="text-3xl font-bold mb-8">Personal Information</h2>

      <div className="space-y-5">
        <InputField
          placeholder="Full Name"
          value={resumeData.personal.fullName}
          onChange={(e) => updatePersonal("fullName", e.target.value)}
        />

        <InputField
          placeholder="Professional Title"
          value={resumeData.personal.title}
          onChange={(e) => updatePersonal("title", e.target.value)}
        />

        <InputField
          type="email"
          placeholder="Email"
          value={resumeData.personal.email}
          onChange={(e) => updatePersonal("email", e.target.value)}
        />

        <InputField
          placeholder="Phone Number"
          value={resumeData.personal.phone}
          onChange={(e) => updatePersonal("phone", e.target.value)}
        />

        <TextAreaField
          rows={6}
          placeholder="Professional Summary"
          value={resumeData.personal.summary}
          onChange={(e) => updatePersonal("summary", e.target.value)}
        />
      </div>
    </div>
  );
}
