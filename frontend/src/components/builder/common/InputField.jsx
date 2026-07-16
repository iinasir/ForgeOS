export default function InputField({
  type = "text",
  placeholder,
  value,
  onChange,
  className = "",
}) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className={`w-full border rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-black ${className}`}
    />
  );
}