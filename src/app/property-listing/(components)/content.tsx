"use client";

import { useEffect, useState } from "react";
import { ContentCard } from "./contentCard";

interface Capacity {
  people: number;
  bedroom: number;
}

export interface Property {
  id: number;
  title: string;
  description: string;
  price: number;
  rating: number;
  superhost: boolean;
  location: string;
  capacity: Capacity;
  image: string;
}

export function Content() {
  const [properties, setProperties] = useState<Property[]>([]);

  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/devchallenges-io/web-project-ideas/main/front-end-projects/data/property-listing-data.json"
    )
      .then((response) => response.json())
      .then((data) => setProperties(data));
  }, []);

  return (
    <div>
      <h3 className="text-cs-24 text-pl-white">Over 200 stays</h3>
      <div className="mt-8 flex flex-wrap gap-x-8 gap-y-[72px] pb-10 justify-center">
        {properties.map((property) => (
          <ContentCard key={property.id} property={property} />
        ))}
      </div>
    </div>
  );
}
