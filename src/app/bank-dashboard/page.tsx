import { Aside, Content, Header, Navigation } from "./(components)";

export default function BankDashboard() {
  return (
    <div className="min-h-screen bg-bdb-dark">
      <Header />
      <div className="flex">
        <Navigation />
        <div className="flex flex-wrap flex-1">
          <div className="flex-1 order-2 md:order-1">
            <Content />
          </div>
          <div className="w-full md:max-w-[332px] border-l-[1px] border-bdb-gray-200 order-1 md:order-2">
            <Aside />
          </div>
        </div>
      </div>
    </div>
  );
}
