export function Hero() {
  return (
    <div className="p-3">
      <div className="relative h-[420px] bg-rp-bg bg-no-repeat bg-cover bg-center rounded-xl">
        <img
          src="/recipe-page/hero-text.svg"
          alt=""
          className="absolute top-[52px] right-6 md:right-[120px] lg:right-[226px]"
        />
      </div>
    </div>
  );
}
