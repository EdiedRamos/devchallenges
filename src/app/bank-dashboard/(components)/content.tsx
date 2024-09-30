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
      <Info
        text="Earnings"
        money="12341"
        image="/bank-dashboard/show chart.svg"
        iconColor="bg-bdb-green"
      />
    </main>
  );
}
