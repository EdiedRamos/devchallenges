export function VoiceControl() {
  return (
    <div className="flex flex-wrap gap-2 py-2 rounded-lg items-center bg-ts-blue-300 max-w-80 text-ts-white mt-2">
      <p className="text-ts-gray px-5">Voice</p>
      <select className="bg-inherit p-3 focus:bg-ts-blue-400 rounded-lg outline-none">
        <option className="bg-ts-blue-400">en-US</option>
        <option className="bg-ts-blue-400">es-CO</option>
      </select>
      <select className="bg-inherit p-3 focus:bg-ts-blue-400 rounded-lg outline-none">
        <option className="bg-ts-blue-400">Albert</option>
        <option className="bg-ts-blue-400">Magic</option>
      </select>
    </div>
  );
}
