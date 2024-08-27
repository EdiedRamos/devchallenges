export function Input({
  type,
  placeholder,
}: {
  type: string;
  placeholder: string;
}) {
  return (
    <input
      className="bg-inherit border-2 border-msr-gray-300 p-4 rounded-xl outline-none focus:border-msr-gray-200"
      type={type}
      placeholder={placeholder}
    />
  );
}
