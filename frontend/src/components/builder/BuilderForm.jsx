import { useResume } from "../../context/ResumeContext";

export default function BuilderForm() {
  const { resumeData, setResumeData } = useResume();

  const handleChange = (field, value) => {
    setResumeData({
      ...resumeData,
      personal: {
        ...resumeData.personal,
        [field]: value,
      },
    });
  };

  return (
    <div className="p-8">
      <h2 className="text-3xl font-bold mb-8">
        Personal Information
      </h2>

      <div className="space-y-5">
        <input
          type="text"
          placeholder="Full Name"
          value={resumeData.personal.fullName}
          onChange={(e) => handleChange("fullName", e.target.value)}
          className="w-full border rounded-xl p-3"
        />

        <input
          type="text"
          placeholder="Professional Title"
          value={resumeData.personal.title}
          onChange={(e) => handleChange("title", e.target.value)}
          className="w-full border rounded-xl p-3"
        />

        <input
          type="email"
          placeholder="Email"
          value={resumeData.personal.email}
          onChange={(e) => handleChange("email", e.target.value)}
          className="w-full border rounded-xl p-3"
        />

        <input
          type="text"
          placeholder="Phone Number"
          value={resumeData.personal.phone}
          onChange={(e) => handleChange("phone", e.target.value)}
          className="w-full border rounded-xl p-3"
        />

        <textarea
          rows={6}
          placeholder="Professional Summary"
          value={resumeData.personal.summary}
          onChange={(e) => handleChange("summary", e.target.value)}
          className="w-full border rounded-xl p-3"
        />
      </div>
    </div>
  );
}