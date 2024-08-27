import React from "react";

function Label({ children }: { children: React.ReactNode }) {
  return <label className="flex flex-col">{children}</label>;
}

function Input({ type, placeholder }: { type: string; placeholder: string }) {
  return (
    <input
      className="bg-inherit border-2 border-msr-gray-300 p-4 rounded-xl outline-none focus:border-msr-gray-200"
      type={type}
      placeholder={placeholder}
    />
  );
}

function Button({ children }: { children: React.ReactNode }) {
  return (
    <button className="bg-msr-purple-200 px-8 py-3 rounded-3xl">
      {children}
    </button>
  );
}

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
