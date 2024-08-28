import { Button } from "./ui/button";

const TOPICS = ["User Experience", "Graphic Design"];

interface Props {
  step: number;
  handleContinue: () => void;
}

export function ThirdStep({ step, handleContinue }: Props) {
  if (step !== 3) return null;

  return (
    <div className="bg-msr-dark p-10 max-w-[440px] rounded-2xl">
      <h2>Summary</h2>
      <div>
        <p>
          <span>Name:</span> Emiliy Johnson
        </p>
        <p>
          <span>Email:</span> emily@emilyjohnsonstl.com
        </p>
      </div>
      <div>
        <p>Topics:</p>
        <ul className="list-disc ml-9">
          {TOPICS.map((topic) => (
            <li key={topic}>{topic}</li>
          ))}
        </ul>
      </div>
      <div className="flex justify-center mt-9">
        <Button onClick={handleContinue}>Confirm</Button>
      </div>
    </div>
  );
}
