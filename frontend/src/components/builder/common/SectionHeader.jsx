export default function SectionHeader({
  title,
  buttonText,
  onAdd,
}) {
  return (
    <>
      <hr className="my-10" />

      <div className="flex items-center justify-between mb-8">
        <h2 className="text-3xl font-bold">
          {title}
        </h2>

        {buttonText && (
          <button
            onClick={onAdd}
            className="bg-black text-white px-4 py-2 rounded-xl hover:bg-gray-800 transition"
          >
            {buttonText}
          </button>
        )}
      </div>
    </>
  );
}