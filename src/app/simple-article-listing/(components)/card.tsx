export interface CardI {
  id: string;
  image: string;
  first: string;
  second: string;
  date: string;
}

type Props = { card: CardI };

export function Card({ card }: Props) {
  return (
    <article className="flex flex-wrap justify-center lg:justify-between max-w-[800px] gap-10 items-center">
      <img
        src={card.image}
        alt={`${card.first} image`}
        className="rounded-xl w-full max-w-[160px] h-[160px]"
      />
      <div>
        <h3 className="text-sal-black font-bold text-cs-20 max-w-[540px]">
          {card.first}:{card.second}
        </h3>
        <p className="text-sal-gray font-medium text-cs-14 mt-4">{card.date}</p>
      </div>
    </article>
  );
}
