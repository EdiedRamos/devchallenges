interface Props {
  text: string;
  money: string;
  image: string;
  iconColor: string;
}

export function Info({ text, money, image, iconColor }: Props) {
  return (
    <div className="flex flex-wrap items-center gap-4">
      <div
        className={`p-3 flex justify-center items-center rounded-lg ${iconColor}`}
      >
        <img src={image} alt="an icon" />
      </div>
      <div>
        <p className="text-bdb-gray-100">{text}</p>
        <p className="text-cs-24 font-medium">
          ${Number(money).toLocaleString()}
        </p>
      </div>
    </div>
  );
}
