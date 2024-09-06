"use client";;
import { ContentCard } from "./";
import { useFilter } from "../(context)";

export function Content() {
  const { filteredContent } = useFilter();

  return (
    <div>
      <h3 className="text-cs-24 text-pl-white">Over 200 stays</h3>
      <div className="mt-8 flex flex-wrap gap-x-8 gap-y-[72px] pb-10 justify-center">
        {filteredContent.map((property) => (
          <ContentCard key={property.id} property={property} />
        ))}
      </div>
    </div>
  );
}
