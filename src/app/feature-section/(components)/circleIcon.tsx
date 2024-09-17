type Theme = "skin" | "cream" | "sky";

interface Props {
  theme: Theme;
  emogi: string;
}

export function CircleIcon({ theme, emogi }: Props) {
  return (
    <div
      className={`w-[52px] h-[52px] rounded-full flex justify-center items-center text-cs-24 ${
        theme === "skin"
          ? "bg-fs-skin"
          : theme === "cream"
          ? "bg-fs-cream"
          : "bg-fs-sky"
      }`}
    >
      {emogi}
    </div>
  );
}
