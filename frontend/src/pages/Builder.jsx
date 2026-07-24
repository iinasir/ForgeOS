import TemplateSelector from "../components/builder/TemplateSelector";
import BuilderSidebar from "../components/builder/BuilderSidebar";
import BuilderForm from "../components/builder/BuilderForm";
import ResumePreview from "../components/builder/ResumePreview";
import DownloadPDFButton from "../components/export/DownloadPDFButton";

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
        <TemplateSelector />

        <BuilderForm />
      </div>

      {/* Resume Preview */}
      <div
        id="preview-scroll"
        className="flex-1 bg-gray-200 overflow-y-auto p-10"
      >
        <div className="flex justify-end mb-6">
          <DownloadPDFButton />
        </div>

        <ResumePreview />
      </div>
    </div>
  );
}
