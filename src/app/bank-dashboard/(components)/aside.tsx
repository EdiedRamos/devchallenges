import { ShoppingCard } from "./shoppingCard";

export function Aside() {
  return (
    <aside className="w-full p-6">
      <div className="border-[1px] border-bdb-gray-200 p-6 rounded-2xl">
        <h4 className="text-bdb-white font-bold">Card details</h4>
        <div className="h-96 flex flex-col items-center justify-center">
          <ShoppingCard
            primaryBg="bg-bdb-green-light"
            secondaryBg="bg-bdb-green"
            className="md:-rotate-90 w-80"
          />
        </div>
        <p className="text-cs-12">CARD NUMBER</p>
        <p className="text-cs-20 font-bold">**** 1234 4567 7800</p>

        <div className="flex flex-wrap gap-4 my-6">
          <div>
            <p className="text-cs-12">EXPIRE DATE</p>
            <p className="font-medium">08/28</p>
          </div>
          <div className="border-l-[1px] border-bdb-gray-200 pl-3">
            <p className="text-cs-12">CVV</p>
            <p className="font-medium">08/28</p>
          </div>
          <div className="border-l-[1px] border-bdb-gray-200 pl-3">
            <p className="text-cs-12">LEVEL</p>
            <p className="font-medium">02</p>
          </div>
        </div>

        <div className="mt-6">
          <h4 className="text-bdb-white font-bold">Spending limits</h4>
          <p className="text-cs-12 mt-6">DAILY TRANSACTION LIMIT</p>
          <div className="w-full h-2 bg-bdb-green-light rounded-full my-3">
            <div className="w-[20%] bg-bdb-green h-2 rounded-full" />
          </div>
          <p>$400 spent of $2000</p>
        </div>
      </div>
    </aside>
  );
}
