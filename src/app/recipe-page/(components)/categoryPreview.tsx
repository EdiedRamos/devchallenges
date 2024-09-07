import { Category } from "../(models)";

interface Props {
  category: Category;
}
export function CategoryPreview({ category }: Props) {
  return (
    <div className="border border-rp-gray rounded-xl h-16 max-w-72 flex flex-wrap items-center gap-3">
      <img
        src={category.strCategoryThumb}
        alt=""
        className="h-full w-auto -ml-12"
      />
      <p className="text-cs-12 font-medium">{category.strCategory}</p>
    </div>
  );
}
