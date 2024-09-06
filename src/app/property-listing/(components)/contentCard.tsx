import { Property } from "../(models)";

export function ContentCard({ property }: { property: Property }) {
  return (
    <div key={property.id} className="w-full max-w-[375px]">
      <div className="relative h-[200px] rounded-t-lg overflow-hidden">
        {property.superhost && (
          <p className="absolute bg-pl-black rounded-full text-cs-10 top-2 left-2 px-3 py-1 text-pl-white">
            Superhost ⭐
          </p>
        )}
        <img
          src={property.image}
          alt=""
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-5 border border-t-0 border-pl-gray-100 rounded-b-xl">
        <p className="text-pl-white">{property.title}</p>
        <p className="text-pl-gray-100 text-cs-14 mt-2">
          {property.description}
        </p>
        <div className="flex flex-wrap gap-4 border-b-2 border-pl-gray-100">
          <div className="flex flex-wrap gap-1 items-center">
            <img src="/property-listing/Home_duotone.svg" alt="house image" />
            <p className="text-cs-10 text-pl-gray-100">
              {property.capacity.bedroom} bedroom
            </p>
          </div>
          <div className="flex flex-wrap items-center py-4">
            <img
              src="/property-listing/User_alt_duotone.svg
      "
              alt="person image"
            />
            <p className="text-cs-10 text-pl-gray-100">
              {property.capacity.people} guests
            </p>
          </div>
        </div>
        <div className="flex flex-wrap justify-between mt-5">
          <p className="text-pl-white font-medium">
            ${property.price}
            <span className="text-pl-gray-100 text-cs-12 font-normal">
              /night
            </span>
          </p>
          <div className="flex flex-wrap gap-1">
            <img src="/property-listing/Starfill.svg" alt="star icon" />
            <p className="text-pl-white">{property.rating}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
