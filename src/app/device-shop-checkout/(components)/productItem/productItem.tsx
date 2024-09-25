import { ImagePreview } from "../imagePreview/imagePreview";

export interface ProductItem {
  productImage: string;
  productName: string;
  productColor: string;
  quantity: number;
  total: number;
}

interface Props extends ProductItem {}

export function ProductItem({
  productImage,
  productName,
  productColor,
  quantity,
  total,
}: Props) {
  return (
    <div className="flex flex-wrap gap-[26px]">
      <div>
        <ImagePreview imageSrc={productImage} alt={`${productName} image`} />
      </div>
      <div className="font-medium flex flex-wrap flex-1 justify-between">
        <div className="flex flex-col justify-between">
          <div>
            <p className="text-dsc-black text-cs-18">{productName}</p>
            <p className="text-dsc-gray-200">{productColor}</p>
          </div>
          <p className="text-dsc-gray-200">x {quantity}</p>
        </div>
        <div className="flex flex-col justify-between items-end">
          <p className="text-dsc-black font-bold text-cs-18">
            ${total.toFixed(2)}
          </p>
          <button>
            <img src="/device-shop-checkout/close-icon.svg" alt="close icon" />
          </button>
        </div>
      </div>
    </div>
  );
}
