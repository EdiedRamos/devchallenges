import { ShoppingCard, AddCard, Info } from ".";

export function Content() {
  return (
    <main>
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
