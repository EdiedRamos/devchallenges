import { Category } from "../(models)";

interface Props {
  category: Category;
}
export function CategoryPreview({ category }: Props) {
  return (
    <div className="border border-rp-gray rounded-xl h-20 max-w-96 flex flex-wrap items-center gap-3">
      <img
        src={category.strCategoryThumb}
        alt=""
        className="h-full w-auto -ml-16"
      />
      <p>{category.strCategory}</p>
    </div>
  );
}
