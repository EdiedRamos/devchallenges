export function Content() {
  return (
    <main className="flex flex-wrap px-10 mx-auto mt-20 font-medium">
      <div className="w-full lg:w-[50%] order-2 lg:order-1">
        <p className="uppercase text-sh-black dark:text-sh-white font-bold text-cs-16">
          😎 Simple way to communicate
        </p>
        <h1 className="text-cs-60 font-bold max-w-96 mt-3 text-sh-black dark:text-sh-white">
          Actions for Accessibility in Design
        </h1>
        <p className="mt-8 max-w-[500px]  text-cs-18 text-sh-dark">
          The fastest way to build and deploy websites with resusable
          components.
        </p>
        <div className="flex flex-wrap gap-8 mt-5 text-cs-14">
          <button className="bg-sh-blue py-4 px-8 rounded-xl text-sh-white text-cs-16">
            GET STARTED
          </button>
          <button>
            <p className="text-sh-blue underline font-bold text-cs-16">
              Get live demo
            </p>
          </button>
        </div>
        <div className="flex gap-7 mt-10 text-cs-14 text-sh-dark">
          <div className="flex gap-2 items-center">
            <img
              src="/single-homepage/Done_ring_round_fill.svg"
              alt="check icon"
            />
            <p>No credit card required</p>
          </div>
          <div className="flex gap-2 items-center">
            <img
              src="/single-homepage/Done_ring_round_fill.svg"
              alt="check icon"
            />
            <p>No software to install</p>
          </div>
        </div>
      </div>
      <div className="w-full lg:w-[50%] order-1 lg:order-2 flex justify-center">
        <img
          src="/single-homepage/hero-image-simple-homepage.png"
          alt="Interesting image"
          className="h-full object-contain"
        />
      </div>
    </main>
  );
}
