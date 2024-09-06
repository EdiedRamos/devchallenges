"use client";

import { PropsWithChildren, useCallback, useState } from "react";
import { type FilterContext, filterContext } from "./filterContext";
import { DEFAULT_LOCATION } from "../../(utils)/constants";

export function FilterProvider({ children }: PropsWithChildren) {
  const [currentLocation, setCurrentLocation] =
    useState<string>(DEFAULT_LOCATION);

  const [bySuperhost, setBySuperhost] = useState<boolean>(false);

  const handleLocation = useCallback(
    (location: string) => setCurrentLocation(location),
    []
  );

  const handleSuperhost = useCallback(
    () => setBySuperhost((prev) => !prev),
    []
  );

  const values: FilterContext = {
    bySuperhost,
    handleSuperhost,
    currentLocation,
    handleLocation,
  };

  return (
    <filterContext.Provider value={values}>{children}</filterContext.Provider>
  );
}
