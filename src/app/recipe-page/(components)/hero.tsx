export function Hero() {
  return (
    <div className="p-3">
      <div className="relative h-[500px] bg-rp-bg bg-no-repeat bg-cover rounded-xl">
        <img
          src="/recipe-page/hero-text.svg"
          alt=""
          className="absolute top-20 right-6 md:right-[120px] lg:right-60"
        />
      </div>
    </div>
  );
}
