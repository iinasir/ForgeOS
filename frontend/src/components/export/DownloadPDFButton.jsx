export default function DownloadPDFButton() {
  return (
    <button
      className="
        bg-indigo-600
        hover:bg-indigo-700
        text-white
        font-semibold
        px-6
        py-3
        rounded-xl
        shadow-md
        transition
      "
      onClick={() => alert("PDF Export Coming Soon 🚀")}
    >
      📄 Download PDF
    </button>
  );
}