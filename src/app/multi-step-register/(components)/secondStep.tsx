import { useRegister } from "./context/register.hook";
import { Button } from "./ui/button";

interface Props {
  step: number;
  handleContinue: () => void;
}

export function SecondStep({ step, handleContinue }: Props) {
  const { interestState, handleInterest } = useRegister();

  if (step !== 2) return null;

  const onClick = () => {
    if (!interestState.some((topic) => topic.selected)) return;
    handleContinue();
  };

  return (
    <div className="w-full bg-msr-dark p-10 max-w-[440px] rounded-2xl">
      <h2 className="text-white">Which topics you are interested in?</h2>
      <div className="flex flex-col items-start mt-6 gap-4">
        {interestState.map((topic) => (
          <button
            key={topic.id}
            onClick={() => handleInterest(topic.id)}
            className={`p-4 w-full rounded-xl border-2  ${
              topic.selected
                ? "bg-msr-purple-200 border-msr-purple-200"
                : "bg-msr-gray-300 border-msr-gray-200"
            }`}
          >
            <p className="text-start text-white">{topic.title}</p>
          </button>
        ))}
      </div>
      <div className="flex justify-center mt-9">
        <Button onClick={onClick}>Continue</Button>
      </div>
    </div>
  );
}
