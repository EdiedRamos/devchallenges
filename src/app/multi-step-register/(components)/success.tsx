export function Success({ step }: { step: number }) {
  if (step !== 4) return null;

  return <p className="text-white">Successfully Saved</p>;
}
