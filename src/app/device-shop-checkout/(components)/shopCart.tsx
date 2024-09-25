export function ShopCart() {
  return (
    <div className=" font-bold flex flex-wrap justify-between">
      <div className="text-dsc-gray-200 flex flex-col gap-2">
        <p className="text-dsc-gray-200">Sub total</p>
        <p className="text-dsc-gray-200">Tax</p>
        <p className="text-dsc-black">Total</p>
      </div>
      <div className="text-dsc-gray-200 flex flex-col gap-2">
        <p>$2597.00</p>
        <p>$623.28</p>
        <p className="text-dsc-black">$3220.28</p>
      </div>
    </div>
  );
}
