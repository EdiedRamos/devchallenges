export function Controls() {
  return (
    <div className="flex gap-4 mt-10">
      <button className="bg-spp-purple text-spp-light px-8 py-2 rounded-md">
        Add to cart
      </button>
      <button className="border border-spp-gray-200 text-spp-dark flex justify-center items-center px-8 py-2 rounded-md gap-[6px] font-bold">
        <img src="/simple-product-page/heart.svg" alt="heart icon" />
        Add to wishlist
      </button>
    </div>
  );
}
