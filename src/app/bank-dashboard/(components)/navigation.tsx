import { PropsWithChildren } from "react";

function SectionTitle({ children }: PropsWithChildren) {
  return <p className="text-bdb-gray-100 text-cs-14 mt-9 mb-6">{children}</p>;
}

export function Navigation() {
  return (
    <nav>
      <div className="flex flex-wrap gap-[10px] items-center">
        <img src="/bank-dashboard/House.svg" alt="dashboard icon" />
        <p>Dashboard</p>
      </div>
      <SectionTitle>ANALYTICS</SectionTitle>
      <div className="grid gap-5">
        <div className="flex flex-wrap gap-[10px] items-center">
          <img src="/bank-dashboard/show chart-1.svg" alt="performance icon" />
          <p>Performance</p>
        </div>
        <div className="flex flex-wrap gap-[10px] justify-between">
          <div className="flex flex-wrap gap-[10px]">
            <img src="/bank-dashboard/Archery.svg" alt="dashboard icon" />
            <p>Hotjar</p>
          </div>
          <div>
            <span className="bg-bdb-purple-200 text-bdb-white text-cs-12 px-2 py-[2px] rounded-xl">
              New
            </span>
          </div>
        </div>
      </div>
      <SectionTitle>SUPPORT</SectionTitle>
      <div className="grid gap-5">
        <div className="flex flex-wrap justify-between">
          <div className="flex flex-wrap gap-[10px]">
            <img src="/bank-dashboard/ticket.svg" alt="ticket icon" />
            <p>Tickets</p>
          </div>
          <div>
            <span className="bg-bdb-gray-200 text-bdb-white text-cs-12 px-2 py-[2px] rounded-xl">
              18
            </span>
          </div>
        </div>
        <div className="flex flex-wrap gap-[10px]">
          <img src="/bank-dashboard/account.svg" alt="account icon" />
          <p>Agents</p>
        </div>
        <div className="flex flex-wrap gap-[10px]">
          <img src="/bank-dashboard/users.svg" alt="users icon" />
          <p>Customers</p>
        </div>
      </div>
      <SectionTitle>SHOP</SectionTitle>
      <div className="grid gap-5">
        <div className="flex flex-wrap gap-[10px]">
          <img src="/bank-dashboard/shop.svg" alt="shop icon" />
          <p>Products</p>
        </div>
        <div className="flex flex-wrap gap-[10px]">
          <img src="/bank-dashboard/basket.svg" alt="basket icon" />
          <p>Orders</p>
        </div>
        <div className="flex flex-wrap gap-[10px]">
          <img src="/bank-dashboard/chat info.svg" alt="chat info icon" />
          <p>Reports</p>
        </div>
      </div>
    </nav>
  );
}
