import { Button, Hero, Input, ProductGrid, ShopCart } from "./(components)";

export default function DeviceShopCheckout() {
  return (
    <section className="min-h-screen bg-dsc-light">
      <Hero />
      <div>
        <ProductGrid />
        <div className="flex flex-wrap gap-2">
          <Input placeholder="Enter coupon code" />
          <Button>Apply Coupon</Button>
        </div>
        <ShopCart />
      </div>
    </section>
  );
}
