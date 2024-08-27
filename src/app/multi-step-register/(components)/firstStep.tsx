import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";

export function FirstStep() {
  return (
    <div className="bg-msr-dark p-10 max-w-[440px] rounded-2xl">
      <h2>Register</h2>
      <form className="mt-10 flex flex-col gap-6">
        <Label>
          <span className="mb-2">Name</span>
          <Input type="text" placeholder="enter your name" />
        </Label>
        <Label>
          <span className="mb-2">Email</span>
          <Input type="email" placeholder="example@gmail.com" />
        </Label>
      </form>
      <div className="flex justify-center mt-9">
        <Button>Continue</Button>
      </div>
    </div>
  );
}
