import { InputHTMLAttributes } from "react";

type Props = InputHTMLAttributes<HTMLInputElement>;

export function InputEmail({ children, className, ...rest }: Props) {
  return (
    <div>
      <input
        type="email"
        className={`w-full py-5 ring-2 bg-jo-cream ring-jo-light-gray text-center outline-none rounded-xl placeholder:text-jo-gray placeholder:font-medium text-jo-gray focus:ring-jo-blue ${className}`}
        {...rest}
      />
    </div>
  );
}
