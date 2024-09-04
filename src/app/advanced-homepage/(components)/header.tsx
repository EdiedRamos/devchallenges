export function Header() {
  return (
    <header className="pt-6">
      <nav className="flex justify-between items-center bg-ah-white">
        <img src="/advanced-homepage/hufie-logo.svg" alt="logo" />
        <div className="flex gap-7 text-cs-16">
          <button className="text-ah-gray">Log in</button>
          <button className="bg-ah-green px-6 py-3 rounded-full text-ah-white">
            Sign Up
          </button>
        </div>
      </nav>
    </header>
  );
}
