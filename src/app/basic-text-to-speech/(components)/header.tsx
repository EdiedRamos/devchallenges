import { Logo } from "./logo";

export function Header() {
  return (
    <div className="flex justify-between items-center">
      <p className="text-ts-white text-cs-18 font-medium">Speechbot</p>
      <Logo className="text-ts-white w-14" />
    </div>
  );
}
