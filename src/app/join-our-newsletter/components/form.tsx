import { Button } from "./button";
import { InputEmail } from "./inputEmail";

export function Form() {
  return (
    <div className="flex flex-col w-full max-w-[552px] mx-auto gap-6 p-6 mt-[60px] bg-jo-white rounded-xl shadow-xl">
      <InputEmail placeholder="Enter your email address" />
      <Button>Subscribe now</Button>
      <p className="text-jo-gray text-cs-14 font-medium text-center">
        Your email is 100% confidential and won’t send you any spam.
      </p>
    </div>
  );
}
