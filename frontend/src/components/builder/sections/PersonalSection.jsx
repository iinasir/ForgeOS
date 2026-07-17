import useResumeUpdater from "../hooks/useResumeUpdater";
import InputField from "../common/InputField";
import TextAreaField from "../common/TextAreaField";
import PhotoUpload from "../common/PhotoUpload";
import { Mail, Phone, Globe, Link, Trash2, Camera } from "lucide-react";

export default function PersonalSection() {
  const { resumeData, updatePersonal } = useResumeUpdater();

  return (
    <div>
      <h2 className="text-3xl font-bold mb-8">Personal Information</h2>
      <PhotoUpload />

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
          placeholder="Email"
          value={resumeData.personal.email}
          onChange={(e) => updatePersonal("email", e.target.value)}
        />

        <InputField
          placeholder="Phone Number"
          value={resumeData.personal.phone}
          onChange={(e) => updatePersonal("phone", e.target.value)}
        />
        <InputField
          placeholder="Location"
          value={resumeData.personal.location}
          onChange={(e) => updatePersonal("location", e.target.value)}
        />
        <InputField
          placeholder="LinkedIn Profile"
          value={resumeData.personal.linkedin}
          onChange={(e) => updatePersonal("linkedin", e.target.value)}
        />

        <InputField
          placeholder="Portfolio Website"
          value={resumeData.personal.portfolio}
          onChange={(e) => updatePersonal("portfolio", e.target.value)}
        />
        <TextAreaField
          rows={3}
          placeholder="Professional Summary"
          value={resumeData.personal.summary}
          onChange={(e) => updatePersonal("summary", e.target.value)}
        />
      </div>
    </div>
  );
}
