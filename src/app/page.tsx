import Link from "next/link";

export default function Page() {
  return (
    <div>
      <h2 className="text-xl font-bold text-center mt-5">
        DevChallanges Solutions 😁
      </h2>
      <section>
        <h3 className="text-lg font-medium">Javascript</h3>
        <ul>
          <li>
            <Link href="multi-step-register" className="underline ml-4">
              Multi-step Register Form
            </Link>
          </li>
          <li>
            <Link href="single-homepage" className="underline ml-4">
              Single Homepage
            </Link>
          </li>
        </ul>
      </section>
    </div>
  );
}
