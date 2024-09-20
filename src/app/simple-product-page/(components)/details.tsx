export function Details() {
  return (
    <article className="flex">
      <div className="flex px-6 py-3 gap-20 rounded-xl items-center mt-10 text-spp-dark text-cs-16 font-bold bg-spp-gray-100">
        <div className="flex flex-col gap-[6px]">
          <p className="inline-block text-spp-gray-300">COLOR</p>
          <p className="inline-block font-bold">Black</p>
        </div>
        <div className="flex flex-col gap-[6px] ">
          <p className="inline-block text-spp-gray-300">SIZE</p>
          <p className="inline-block font-bold">42</p>
        </div>
        <p className="inline-block text-cs-32 font-bold">$59.00</p>
      </div>
    </article>
  );
}
