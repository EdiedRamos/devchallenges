interface Props {
  step: number;
}

export function Steps({ step }: Props) {
  if (step > 3) return null;
  return (
    <div className="flex gap-6 items-center">
      <p>Step {step} of 3</p>
      <div className="flex gap-2">
        {Array.from({ length: 3 }, (_, i) => i + 1).map((info) => (
          <div
            key={info}
            className={`w-3 h-3 bg-msr-purple-200 rounded-full ${
              step === info ? "ring ring-msr-purple-100" : ""
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
}
