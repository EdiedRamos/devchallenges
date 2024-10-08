import { ShoppingCard, AddCard, Info, YourBalance } from ".";

export function Content() {
  return (
    <main className="border-[1px] border-bdb-gray-200 flex-1 m-6 p-6 rounded-2xl">
      <h4 className="text-bdb-white font-bold">Inventory Details</h4>
      <div className="mt-7">
        <YourBalance />
      </div>

      <h4 className="text-bdb-white font-bold my-7">
        Inventory Details{" "}
        <span className="ml-2 text-bdb-white text-cs-12 px-2 py-[2px] rounded-xl bg-bdb-gray-200">
          2
        </span>
      </h4>
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

      <div className="mt-6 mb-7">
        <AddCard />
      </div>

      <section className="flex flex-wrap justify-around border-[1px] border-bdb-gray-200 rounded-xl p-5">
        <Info
          text="Earnings"
          money="12341"
          image="/bank-dashboard/show chart.svg"
          iconColor="bg-bdb-green"
        />
        <Info
          text="Spendings"
          money="4009"
          image="/bank-dashboard/dollar coin.svg"
          iconColor="bg-bdb-purple-200"
        />
        <Info
          text="Goals"
          money="8098"
          image="/bank-dashboard/aim.svg"
          iconColor="bg-bdb-orange-200"
        />
      </section>
    </main>
  );
}
