import { Content, Filter, Hero } from "./(components)";

export default function PropertyListing() {
  return (
    <div className="min-h-screen bg-pl-black">
      <Hero />
      <div className="max-w-[1200px] mx-auto">
        <Filter />
        <Content />
      </div>
    </div>
  );
}
