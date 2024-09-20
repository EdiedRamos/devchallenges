export function BreadCrumb() {
  return (
    <div className="flex text-spp-dark gap-2 text-cs-12 font-bold">
      <a href="#">Home</a>
      <span className="text-spp-gray-300">-</span>
      <a href="#">Products</a>
      <span className="text-spp-gray-300">-</span>
      <a href="#" className="text-spp-gray-300">
        Sneakers
      </a>
    </div>
  );
}
