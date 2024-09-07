"use client";

export function Sorting() {
  return (
    <div className="flex flex-col justify-center">
      <select className="bg-rp-light text-rp-dark py-3 px-6 rounded-full text-cs-14 outline-none">
        <option>Sort by: Name</option>
        <option>Sort by:ID</option>
      </select>
    </div>
  );
}
