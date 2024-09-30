import { PropsWithChildren } from "react";

function SectionTitle({ children }: PropsWithChildren) {
  return (
    <p className="hidden lg:inline-block text-bdb-gray-100 text-cs-14 mt-8 mb-6">
      {children}
    </p>
  );
}

function NavigationItem({
  imageSrc,
  text,
}: {
  imageSrc: string;
  text: string;
}) {
  return (
    <div className="flex flex-wrap gap-[10px] items-center" title={text}>
      <img src={imageSrc} alt={`${text} icon`} />
      <p className="hidden lg:inline-block">{text}</p>
    </div>
  );
}

function NavigationBadge({
  children,
  background,
}: PropsWithChildren & { background: string }) {
  return (
    <div className="hidden lg:inline-block">
      <span
        className={`${background} text-bdb-white text-cs-12 px-2 py-[2px] rounded-xl`}
      >
        {children}
      </span>
    </div>
  );
}

function NavigationMainSpacer({ children }: PropsWithChildren) {
  return <div className="grid gap-3 lg:gap-5">{children}</div>;
}

export function Navigation() {
  return (
    <nav className="flex flex-col justify-between border-r-[1px] border-bdb-gray-200 w-[70px] lg:w-full max-w-[220px] p-6 min-h-screen text-bdb-white">
      <div className="grid gap-3 lg:gap-0">
        <NavigationItem imageSrc="/bank-dashboard/House.svg" text="Dashboard" />

        <SectionTitle>ANALYTICS</SectionTitle>
        <NavigationMainSpacer>
          <NavigationItem
            imageSrc="/bank-dashboard/show chart-1.svg"
            text="Performance"
          />
          <div className="flex flex-wrap gap-[10px] justify-between">
            <NavigationItem
              imageSrc="/bank-dashboard/Archery.svg"
              text="Hotjar"
            />
            <NavigationBadge background="bg-bdb-purple-200">
              New
            </NavigationBadge>
          </div>
        </NavigationMainSpacer>

        <SectionTitle>SUPPORT</SectionTitle>
        <NavigationMainSpacer>
          <div className="flex flex-wrap justify-between">
            <NavigationItem
              imageSrc="/bank-dashboard/ticket.svg"
              text="Tickets"
            />
            <NavigationBadge background="bg-bdb-gray-200">18</NavigationBadge>
          </div>
          <NavigationItem
            imageSrc="/bank-dashboard/account.svg"
            text="Agents"
          />
          <NavigationItem
            imageSrc="/bank-dashboard/users.svg"
            text="Customers"
          />
        </NavigationMainSpacer>

        <SectionTitle>SHOP</SectionTitle>
        <NavigationMainSpacer>
          <NavigationItem imageSrc="/bank-dashboard/shop.svg" text="Products" />
          <NavigationItem imageSrc="/bank-dashboard/basket.svg" text="Orders" />
          <NavigationItem
            imageSrc="/bank-dashboard/chat info.svg"
            text="Reports"
          />
        </NavigationMainSpacer>
      </div>

      <NavigationMainSpacer>
        <NavigationItem
          imageSrc="/bank-dashboard/Setting.svg"
          text="Settings"
        />
        <NavigationItem imageSrc="/bank-dashboard/Logout.svg" text="Logout" />
      </NavigationMainSpacer>
    </nav>
  );
}
