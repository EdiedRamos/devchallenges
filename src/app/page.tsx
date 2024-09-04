import Link from "next/link";

export default function Page() {
  return (
    <div className="p-5">
      <h2 className="text-xl font-bold text-center mt-5">
        DevChallanges Solutions 😁
      </h2>
      <section>
        <h3 className="text-lg font-medium">Responsive Web Design</h3>
        <ul>
          <li>
            <Link href="single-homepage" className="underline ml-4">
              Single Homepage
            </Link>
          </li>
          <li>
            <Link href="process-page" className="underline ml-4">
              Process Page
            </Link>
          </li>
          <li>
            <Link href="faq-page" className="underline ml-4">
              FAQ Page
            </Link>
          </li>
          <li>
            <Link href="advanced-homepage" className="underline ml-4">
              Advanced Homepage - Hufie
            </Link>
          </li>
        </ul>
      </section>
      <section className="mt-5">
        <h3 className="text-lg font-medium">Javascript</h3>
        <ul>
          <li>
            <Link href="multi-step-register" className="underline ml-4">
              Multi-step Register Form
            </Link>
          </li>
        </ul>
      </section>
    </div>
  );
}
