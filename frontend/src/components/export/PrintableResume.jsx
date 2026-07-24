import ResumePreview from "../builder/ResumePreview";
import { forwardRef } from "react";

const PrintableResume = forwardRef((props, ref) => {
  return (
    <div
      ref={ref}
      className="bg-white p-8"
      style={{
        width: "210mm",
        minHeight: "297mm",
        margin: "0 auto",
      }}
    >
      <ResumePreview />
    </div>
  );
});

PrintableResume.displayName = "PrintableResume";

export default PrintableResume;