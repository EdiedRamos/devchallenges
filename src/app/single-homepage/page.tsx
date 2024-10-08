import { Content, Header } from "./(components)";

export default function SingleHomepage() {
  return (
    <div className="bg-sh-light dark:bg-sh-black min-h-screen">
      <div className="max-w-[1170px] mx-auto">
        <div className="p-7">
          <Header />
        </div>
        <Content />
      </div>
    </div>
  );
}
