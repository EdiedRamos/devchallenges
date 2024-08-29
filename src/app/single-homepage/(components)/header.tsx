export function Header() {
  return (
    <header className="flex justify-between mt-7">
      <div>Logo</div>
      <nav>
        <ul className="flex gap-10">
          <li>About us</li>
          <li>Product</li>
          <li>Resource</li>
          <li>Contact</li>
        </ul>
      </nav>
      <div>Theme toggle</div>
    </header>
  );
}
