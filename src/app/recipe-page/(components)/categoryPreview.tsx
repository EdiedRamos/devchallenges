import type { Category } from "../(models)";

interface Props {
  onSelectCategory: (category: Category) => void;
  isActive?: boolean;
  category: Category;
}
export function CategoryPreview({
  isActive = false,
  category,
  onSelectCategory,
}: Props) {
  return (
    <div
      onClick={() => onSelectCategory(category)}
      className={`border border-rp-gray overflow-hidden rounded-xl h-[55px] max-w-72 flex flex-wrap items-center gap-3 hover:cursor-pointer hover:opacity-80 ${
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
