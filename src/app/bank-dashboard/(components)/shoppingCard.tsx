export function ShoppingCard({
  primaryBg = "bg-orange-200",
  secondaryBg = "bg-purple-200",
}: {
  primaryBg?: string;
  secondaryBg?: string;
}) {
  return (
    <div className="w-full max-w-72 rounded-2xl overflow-hidden">
      <div
        className={`flex flex-wrap justify-between p-6 pb-10 font-medium ${primaryBg}`}
      >
        <div className="flex flex-col gap-4">
          <p className="text-bdb-dark">Shopping Card</p>
          <p className="text-bdb-gray-100">NAME</p>
        </div>
        <div className="flex flex-col gap-4 items-end">
          <div>
            <img src="/bank-dashboard/cpu.svg" alt="microchip card image" />
          </div>
          <p className="text-bdb-gray-100">Exp 26/6</p>
        </div>
      </div>
      <div
        className={`flex flex-wrap justify-between items-center p-6 text-bdb-dark font-bold ${secondaryBg}`}
      >
        <p className="text-cs-20">**** **** 4486</p>
        <p className="text-cs-20">VISA</p>
      </div>
    </div>
  );
}
