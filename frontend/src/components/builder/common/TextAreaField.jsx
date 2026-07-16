export default function TextAreaField({
  rows = 4,
  placeholder,
  value,
  onChange,
}) {
  return (
    <textarea
      rows={rows}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className="w-full border rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-black"
    />
  );
}