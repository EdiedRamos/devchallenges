type Location = {
  id: string;
  name: string;
};

const LOCATIONS: Location[] = [
  {
    id: "294c01f7-47ed-49d4-a2b3-6437367380d6",
    name: "Norway",
  },
  {
    id: "1683f960-c8fd-425f-aef0-919f007998c8",
    name: "Finland",
  },
  {
    id: "3d21ca06-55f9-4084-bec7-1fea64e67910",
    name: "Sweden",
  },
  {
    id: "f47eb764-8fea-4556-838f-3a4656d280d8",
    name: "Switzerland",
  },
];

const currentLocationFilter: string = "ALL_STAYS";

const commonStyles = "px-3 py-2 rounded-lg";

export function LocationFilter() {
  return (
    <div className="flex flex-wrap gap-3 text-pl-white">
      <button
        className={`${commonStyles} ${
          currentLocationFilter === "ALL_STAYS" ? "bg-pl-gray-200" : ""
        }`}
      >
        All Stays
      </button>
      {LOCATIONS.map((location) => (
        <button
          className={`${commonStyles} ${
            currentLocationFilter === location.id ? "bg-pl-gray-200" : ""
          }`}
          key={location.id}
        >
          {location.name}
        </button>
      ))}
    </div>
  );
}
