import { useRef } from "react";
import { Camera, Trash2 } from "lucide-react";
import useResumeUpdater from "../hooks/useResumeUpdater";

export default function PhotoUpload() {
  const { resumeData, updatePhoto } = useResumeUpdater();

  const fileInputRef = useRef(null);

  const handleUpload = (e) => {
    const file = e.target.files?.[0];

    if (!file) return;

    const reader = new FileReader();

    reader.onloadend = () => {
      updatePhoto(reader.result);
    };

    reader.readAsDataURL(file);
  };

  const removePhoto = () => {
    updatePhoto("");
  };

  return (
    <div className="flex flex-col items-center mb-8">

      <div className="w-36 h-36 rounded-full border-2 border-dashed border-gray-300 overflow-hidden flex items-center justify-center bg-gray-50">

        {resumeData.personal.photo ? (
          <img
            src={resumeData.personal.photo}
            alt="Profile"
            className="w-full h-full object-cover"
          />
        ) : (
          <Camera size={36} className="text-gray-400" />
        )}

      </div>

      <input
        ref={fileInputRef}
        type="file"
        accept="image/png,image/jpeg,image/jpg"
        onChange={handleUpload}
        className="hidden"
      />

      <button
        type="button"
        onClick={() => fileInputRef.current.click()}
        className="mt-4 bg-black text-white px-5 py-2 rounded-xl hover:bg-gray-800 transition"
      >
        {resumeData.personal.photo
          ? "Change Photo"
          : "Upload Photo"}
      </button>

      {resumeData.personal.photo && (
        <button
          type="button"
          onClick={removePhoto}
          className="mt-3 flex items-center gap-2 text-red-600 hover:text-red-700 transition"
        >
          <Trash2 size={16} />
          Remove Photo
        </button>
      )}

    </div>
  );
}