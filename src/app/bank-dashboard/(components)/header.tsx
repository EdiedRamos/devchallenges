export function Header() {
  return (
    <header className="flex flex-wrap justify-between px-6 py-5 border-b-[1px] border-bdb-gray-200">
      <img src="/bank-dashboard/hbank-logo.svg" alt="hbank logo" />
      <div className="flex flex-wrap items-center gap-3">
        <img src="/bank-dashboard/avatar.png" alt="user image" />
        <p>Ethan Sutcliffe</p>
      </div>
    </header>
  );
}
