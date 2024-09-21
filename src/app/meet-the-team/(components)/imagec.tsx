interface Props {
  className?: string;
  src: string;
  alt: string;
  title?: string;
  description?: string;
}

export function ImageC({
  className = "",
  src,
  alt,
  title,
  description,
}: Props) {
  return (
    <div className={`relative max-h-72 max-w-[284px] ${className}`}>
      <img src={src} alt={alt} className="w-full h-full" />
      {(title || description) && (
        <div className="absolute top-0 z-10 h-full w-full flex items-end">
          <div className="bg-gradient-to-t from-mtt-dark w-full p-6">
            {title && <h6 className="text-cs-20 font-medium">{title}</h6>}
            {description && <p className="text-cs-14">{description}</p>}
          </div>
        </div>
      )}
    </div>
  );
}
