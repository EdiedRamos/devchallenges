"use client";

import { PropsWithChildren, useCallback, useState } from "react";
import { type FilterContext, filterContext } from "./filterContext";
import { DEFAULT_LOCATION } from "../../(utils)/constants";
import { toValidNumber } from "../../(utils)/converters";

export function FilterProvider({ children }: PropsWithChildren) {
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

  const values: FilterContext = {
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
