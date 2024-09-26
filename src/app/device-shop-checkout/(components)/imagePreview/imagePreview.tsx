export interface Props {
  /** image source */
  imageSrc: string;
  /** image alt*/
  alt: string;
}

export function ImagePreview({ imageSrc, alt }: Props) {
  return (
    <div className="flex items-center justify-center w-[100px] h-[100px] border rounded-xl bg-dsc-light">
      <img
        className="w-[80px] h-[80px] object-contain"
        src={imageSrc}
        alt={alt}
      />
    </div>
  );
}
