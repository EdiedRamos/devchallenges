"use client";

export function TypeFilter() {
  return (
    <div className="flex flex-wrap gap-5 items-center">
      <div className="flex flex-wrap gap-2 items-center">
        <div className="relative inline-block w-12 select-none">
          <input
            type="checkbox"
            name="toggle"
            id="toggle"
            className="toggle-checkbox absolute block w-5 h-5 rounded-full bg-white border-4 appearance-none cursor-pointer border-none top-[2px] mx-1"
          />
          <label
            htmlFor="toggle"
            className="toggle-label block overflow-hidden h-6 rounded-full bg-pl-blue cursor-pointer"
          />
        </div>
        <p className="text-pl-white text-cs-12">Superhost</p>
      </div>
      <select className="bg-transparent py-3 px-6 border-2 rounded-lg border-pl-gray-100 outline-none">
        <option className="bg-pl-dark-200">Property type</option>
        <option className="bg-pl-dark-200">1 debroom</option>
        <option className="bg-pl-dark-200">2 debroom</option>
      </select>
    </div>
  );
}
