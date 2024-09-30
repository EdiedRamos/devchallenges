export function YourBalance() {
  return (
    <div className="w-full flex flex-wrap rounded-xl overflow-hidden">
      <article className="w-[50%] bg-bdb-green-light text-bdb-dark font-medium p-5 flex flex-col gap-4">
        <p>Your balance:</p>
        <p className="text-cs-24 font-bold">
          ${Number(25330).toLocaleString()}
        </p>
        <p>3 cards</p>
      </article>
      <div className="w-[50%] bg-bdb-green flex justify-end items-end p-5 bg-bdb-bg bg-no-repeat bg-right">
        <button className="flex flex-wrap gap-2 px-4 py-1 bg-bdb-white text-bdb-dark font-medium rounded-2xl hover:opacity-90">
          Details{" "}
          <img src="/bank-dashboard/arrow-right.svg" alt="arrow right icon" />
        </button>
      </div>
    </div>
  );
}
