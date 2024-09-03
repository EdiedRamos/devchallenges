interface Props {
  title: string;
  description: string;
}

export function AccordionOpened({ title, description }: Props) {
  return (
    <div className="flex justify-between w-full max-w-[746px] bg-fq-gray-300 px-8 py-7 rounded-xl">
      <div>
        <p className="text-fq-gray-100 text-cs-20">{title} </p>
        <p className="max-w-[700px] text-cs-14 text-fq-gray-100 mt-2">
          {description}
        </p>
      </div>
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
        className="text-white"
      >
        <path d="m18 15-6-6-6 6" />
      </svg>
    </div>
  );
}
