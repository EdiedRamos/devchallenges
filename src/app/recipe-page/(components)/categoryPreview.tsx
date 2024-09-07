import { Category } from "../(models)";

interface Props {
  isActive?: boolean;
  category: Category;
}
export function CategoryPreview({ isActive = false, category }: Props) {
  return (
    <div
      className={`border border-rp-gray overflow-hidden rounded-xl h-16 max-w-72 flex flex-wrap items-center gap-3 hover:cursor-pointer hover:opacity-80 ${
        isActive ? "bg-rp-yellow text-rp-dark" : "text-rp-light"
      }`}
    >
      <img
        src={category.strCategoryThumb}
        alt=""
        className="h-full w-24 -ml-12 object-cover"
      />
      <p className="text-cs-12 font-medium">{category.strCategory}</p>
    </div>
  );
}
