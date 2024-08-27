import { Button } from "./ui/button";

const TOPICS = ["User Experience", "Graphic Design"];

export function ThirdStep() {
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
        <Button>Confirm</Button>
      </div>
    </div>
  );
}
