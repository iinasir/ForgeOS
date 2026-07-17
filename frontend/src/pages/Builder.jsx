import BuilderSidebar from "../components/builder/BuilderSidebar";
import BuilderForm from "../components/builder/BuilderForm";
import ResumePreview from "../components/builder/ResumePreview";

export default function Builder() {
  return (
    <div className="h-screen bg-gray-100 flex">
      {/* Sidebar */}
      <BuilderSidebar />

      {/* Form */}
      <div
        id="builder-scroll"
        className="w-[35%] border-r bg-white overflow-y-auto"
      >
        <BuilderForm />
      </div>

      {/* Resume Preview */}
      <div
        id="preview-scroll"
        className="flex-1 bg-gray-200 overflow-y-auto p-10"
      >
        <ResumePreview />
      </div>
    </div>
  );
}
