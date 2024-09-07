import { Filtering } from "./filtering";
import { Meals } from "./meals";

export function Content() {
  return (
    <div className="flex-1">
      <Filtering />
      <Meals />
    </div>
  );
}
