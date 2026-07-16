import { useResume } from "../../context/ResumeContext";

export default function ResumePreview() {
  const { resumeData } = useResume();

  return (
    <div className="max-w-[800px] mx-auto bg-white shadow-2xl min-h-[1100px] p-12">
      <h1 className="text-5xl font-bold">
        {resumeData.personal.fullName || "Your Name"}
      </h1>

      <p className="text-xl text-gray-500 mt-2">
        {resumeData.personal.title || "Professional Title"}
      </p>

      <hr className="my-8" />

      <div className="mb-6">
        <p className="text-gray-700">
          <strong>Email:</strong>{" "}
          {resumeData.personal.email || "example@email.com"}
        </p>

        <p className="text-gray-700">
          <strong>Phone:</strong>{" "}
          {resumeData.personal.phone || "+91 9876543210"}
        </p>
      </div>

      <h2 className="font-bold text-xl mb-3">
        Professional Summary
      </h2>

      <p className="text-gray-600 whitespace-pre-wrap">
        {resumeData.personal.summary ||
          "Write a professional summary to see it appear here."}
      </p>
    </div>
  );
}