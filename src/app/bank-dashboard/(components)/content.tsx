import { ShoppingCard, AddCard, Info } from ".";

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
