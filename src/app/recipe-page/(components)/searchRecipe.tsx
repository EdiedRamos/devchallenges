"use client";

export function SearchRecipe() {
  return (
    <div className="px-6 py-3 bg-rp-dark border-[2px] border-rp-gray rounded-full text-rp-light flex gap-4 w-full max-w-96 text-cs-14">
      <img src="/recipe-page/Search.svg" alt="" />
      <input
        type="search"
        placeholder="Search recipes and more..."
        className="w-full bg-inherit outline-none placeholder:text-rp-gray"
      />
    </div>
  );
}
