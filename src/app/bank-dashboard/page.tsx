import { Aside, Content, Header, Navigation } from "./(components)";

export default function BankDashboard() {
  return (
    <div className="min-h-screen bg-bdb-dark">
      <Header />
      <Navigation />
      <Content />
      <Aside />
    </div>
  );
}
