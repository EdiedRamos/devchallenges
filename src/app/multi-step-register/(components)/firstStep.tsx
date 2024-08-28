import { FormEvent } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { useRegister } from "./context/register.hook";

interface Props {
  step: number;
  handleContinue: () => void;
}

export function FirstStep({ step, handleContinue }: Props) {
  const {
    formState: { name, email },
    handleFormState,
  } = useRegister();

  if (step !== 1) return null;

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    handleContinue();
  };

  return (
    <div className="bg-msr-dark p-10 w-full max-w-[440px] rounded-2xl">
      <h2>Register</h2>
      <form className="mt-10 flex flex-col gap-6" onSubmit={onSubmit}>
        <Label>
          <span className="mb-2">Name</span>
          <Input
            type="text"
            placeholder="enter your name"
            name="name"
            value={name}
            onChange={handleFormState}
            required
          />
        </Label>
        <Label>
          <span className="mb-2">Email</span>
          <Input
            type="email"
            name="email"
            placeholder="example@gmail.com"
            value={email}
            onChange={handleFormState}
            required
          />
        </Label>
        <div className="flex justify-center mt-9">
          <Button type="submit">Continue</Button>
        </div>
      </form>
    </div>
  );
}
