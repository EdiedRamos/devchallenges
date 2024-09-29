import { ShoppingCard } from "./shoppingCard";

function AddCard() {
  return (
    <div className="flex justify-center items-center border-[1px] border-bdb-gray-200 w-full max-w-72 h-52 rounded-xl border-dashed">
      + Add Card
    </div>
  );
}

export function Content() {
  return (
    <main>
      <div className="flex flex-wrap gap-5">
        <ShoppingCard
          primaryBg="bg-bdb-purple-100"
          secondaryBg="bg-bdb-purple-200"
        />
        <ShoppingCard
          primaryBg="bg-bdb-orange-100"
          secondaryBg="bg-bdb-orange-200"
        />
      </div>
      <AddCard />
    </main>
  );
}
