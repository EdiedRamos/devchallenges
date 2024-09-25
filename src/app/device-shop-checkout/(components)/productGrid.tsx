import { ProductItem } from "./productItem/productItem";

const DATA: ProductItem[] = [
  {
    productColor: "Golden",
    productImage: "/device-shop-checkout/gold.png",
    productName: "iPhone 12 Pro",
    quantity: 1,
    total: 999,
  },
  {
    productColor: "Blue",
    productImage: "/device-shop-checkout/blue.png",
    productName: "Apple Watch",
    quantity: 1,
    total: 399,
  },
  {
    productColor: "Green",
    productImage: "/device-shop-checkout/iMacFront.png",
    productName: "iMac",
    quantity: 1,
    total: 1199,
  },
];

export function ProductGrid() {
  return (
    <div className="flex flex-col gap-[26px]">
      {DATA.map((product) => (
        <ProductItem key={product.productName} {...product} />
      ))}
    </div>
  );
}
