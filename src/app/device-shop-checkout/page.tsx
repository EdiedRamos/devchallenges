import {
  Button,
  CustomLabel,
  Hero,
  Input,
  ProductGrid,
  ShopCart,
} from "./(components)";

export default function DeviceShopCheckout() {
  return (
    <section className="min-h-screen bg-dsc-light">
      <Hero />
      <div className="grid grid-cols-1 lg:grid-cols-2 max-w-[1200px] mx-auto -mt-[125px] bg-dsc-light rounded-2xl shadow-lg justify-between overflow-hidden">
        {/* left part */}
        <div className="p-8 bg-dsc-gray-tr">
          <ProductGrid />
          <div className="grid grid-columns-1 lg:grid-columns-12 my-6 gap-2">
            <div className="lg:col-start-1 lg:col-end-7">
              <Input placeholder="Enter coupon code" />
            </div>
            <div className="lg:col-start-7">
              <Button padding="p-3">Apply Coupon</Button>
            </div>
          </div>
          <ShopCart />
        </div>
        {/* right part */}
        <div className="bg-dsc-white p-8">
          <form className="text-dsc-gray-200">
            <h4 className="text-dsc-black font-bold mb-8">
              Contact Information
            </h4>
            <div className="grid gap-7">
              <CustomLabel>
                <span className="text-cs-14 font-medium">
                  First & Last name
                </span>
                <Input
                  type="text"
                  placeholder="Enter first & last name"
                  theme="secondary"
                />
              </CustomLabel>
              <CustomLabel>
                <span className="text-cs-14 font-medium">Email Address</span>
                <Input
                  type="text"
                  placeholder="Enter email address"
                  theme="secondary"
                />
              </CustomLabel>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <CustomLabel>
                  <span className="text-cs-14 font-medium">Country</span>
                  <select className="bg-dsc-light p-4 rounded-xl border text-dsc-black font-medium">
                    <option>Finland</option>
                  </select>
                </CustomLabel>
                <CustomLabel>
                  <span className="text-cs-14 font-medium">Postal Code</span>
                  <Input type="text" value={"00270"} theme="secondary" />
                </CustomLabel>
              </div>
              <Button>Continue</Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
