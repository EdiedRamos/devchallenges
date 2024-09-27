import { Content, Header } from "./(components)";

export default function BentoBoxLayout() {
  return (
    <div className="min-h-screen bg-bbl-white pb-10">
      <Header />
      <Content />
    </div>
  );
}
