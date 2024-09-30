import { ShoppingCard, AddCard, Info } from ".";

function YourBalance() {
  return (
    <div className="w-full flex flex-wrap rounded-xl overflow-hidden">
      <article className="w-[50%] bg-bdb-green-light text-bdb-dark font-medium p-5 flex flex-col gap-4">
        <p>Your balance:</p>
        <p className="text-cs-24 font-bold">
          ${Number(25330).toLocaleString()}
        </p>
        <p>3 cards</p>
      </article>
      <div className="w-[50%] bg-bdb-green flex justify-end items-end p-5 bg-bdb-bg bg-no-repeat bg-right">
        <button className="px-4 py-1 bg-bdb-white text-bdb-dark font-medium rounded-2xl">
          Details
        </button>
      </div>
    </div>
  );
}

export function Content() {
  return (
    <main className="border-[1px] border-bdb-gray-200 flex-1 m-6 p-6 rounded-2xl">
      <h4 className="text-bdb-white font-bold">Inventory Details</h4>
      <div className="mt-8">
        <YourBalance />
      </div>

      <h4 className="text-bdb-white font-bold my-8">
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

      <div className="mt-6 mb-8">
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
