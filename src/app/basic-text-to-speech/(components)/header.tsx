import { Logo } from "./logo";

export function Header() {
  return (
    <div className="flex justify-between items-center">
      <p className="text-ts-white text-cs-20 ">Speechbot</p>
      <Logo className="text-ts-white w-16" />
    </div>
  );
}
