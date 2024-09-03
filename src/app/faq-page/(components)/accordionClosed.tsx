interface Props {
  title: string;
}

export function AccordionClosed({ title }: Props) {
  return (
    <div className="flex justify-between w-full max-w-[746px] px-8">
      <p className="text-fq-gray-100 text-cs-20">{title} </p>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="m6 9 6 6 6-6" />
      </svg>
    </div>
  );
}
