import { useRegister } from "./context/register.hook";
import { Button } from "./ui/button";

const TOPICS = ["User Experience", "Graphic Design"];

interface Props {
  step: number;
  handleContinue: () => void;
}

export function ThirdStep({ step, handleContinue }: Props) {
  const {
    formState: { name, email },
    interestState,
  } = useRegister();

  if (step !== 3) return null;

  return (
    <div className="w-full bg-msr-dark p-10 max-w-[440px] rounded-2xl">
      <h2>Summary</h2>
      <div>
        <p>
          <span>Name:</span> {name}
        </p>
        <p>
          <span>Email:</span> {email}
        </p>
      </div>
      <div>
        <p>Topics:</p>
        <ul className="list-disc ml-9">
          {interestState
            .filter((topic) => topic.selected)
            .map((topic) => (
              <li key={topic.id}>{topic.title}</li>
            ))}
        </ul>
      </div>
      <div className="flex justify-center mt-9">
        <Button onClick={handleContinue}>Confirm</Button>
      </div>
    </div>
  );
}
