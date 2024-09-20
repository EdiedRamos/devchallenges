import {
  BreadCrumb,
  Content,
  Controls,
  Details,
  Heading,
  Hightlights,
} from "./(components)";

export default function ProductPage() {
  return (
    <section className="min-h-screen bg-spp-light flex flex-wrap gap-[52px] py-9 pl-9">
      <div>
        <img
          className="rounded-md"
          src="/simple-product-page/shoe_image.png"
          alt="shoes photo"
        />
      </div>
      <div className="flex flex-col w-auto">
        <BreadCrumb />
        <Heading />
        <Content />
        <Hightlights />
        <Details />
        <Controls />
      </div>
    </section>
  );
}
