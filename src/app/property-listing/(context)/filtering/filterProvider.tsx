"use client";

import { PropsWithChildren, useCallback, useEffect, useState } from "react";
import { filterContext } from "./filterContext";
import { DEFAULT_LOCATION } from "../../(utils)/constants";
import { toValidNumber } from "../../(utils)/converters";

import { Property, type FilterContext } from "../../(models)";
import { FilterServiceBuilder } from "../../(services)";

export function FilterProvider({ children }: PropsWithChildren) {
  const [content, setContent] = useState<Property[]>([]);
  const [filteredContent, setFilteredContent] = useState<Property[]>([]);

  const [currentLocation, setCurrentLocation] =
    useState<string>(DEFAULT_LOCATION);

  const [bySuperhost, setBySuperhost] = useState<boolean>(false);

  const [bedroomType, setBedroomType] = useState<number>(0);

  const handleLocation = useCallback(
    (location: string) => setCurrentLocation(location),
    []
  );

  const handleSuperhost = useCallback(
    () => setBySuperhost((prev) => !prev),
    []
  );

  const handleBedroomType = useCallback(
    (type: string) => setBedroomType(toValidNumber(type)),
    []
  );

  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/devchallenges-io/web-project-ideas/main/front-end-projects/data/property-listing-data.json"
    )
      .then((response) => response.json())
      .then((data) => setContent(data));
  }, []);

  useEffect(() => {
    const filtered = new FilterServiceBuilder(content)
      .byLocation(currentLocation)
      .bySuperhost(bySuperhost)
      .byPropertyType(bedroomType)
      .build();
    setFilteredContent(filtered);
  }, [content, currentLocation, bySuperhost, bedroomType]);

  const values: FilterContext = {
    filteredContent,
    bySuperhost,
    handleSuperhost,
    bedroomType,
    currentLocation,
    handleLocation,
    handleBedroomType,
  };

  return (
    <filterContext.Provider value={values}>{children}</filterContext.Provider>
  );
}
