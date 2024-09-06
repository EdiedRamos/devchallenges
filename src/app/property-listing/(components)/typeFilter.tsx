"use client";

import { useFilter } from "../(context)";

export function TypeFilter() {
  const { bySuperhost, bedroomType, handleSuperhost, handleBedroomType } =
    useFilter();

  return (
    <div className="flex flex-wrap gap-5 items-center">
      <div className="flex flex-wrap gap-2 items-center">
        <div className="relative inline-block w-12 select-none">
          <input
            checked={bySuperhost}
            onChange={handleSuperhost}
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
      <select
        value={bedroomType}
        onChange={(event) => handleBedroomType(event.target.value)}
        className="bg-transparent py-3 px-6 border-2 rounded-lg border-pl-gray-100 outline-none text-pl-white"
      >
        <option value="0" className="bg-pl-dark-200">
          Property type
        </option>
        <option value="1" className="bg-pl-dark-200">
          1 bedroom
        </option>
        <option value="2" className="bg-pl-dark-200">
          2 bedroom
        </option>
      </select>
    </div>
  );
}
