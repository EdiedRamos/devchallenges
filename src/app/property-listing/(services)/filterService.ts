import { Property } from "../(models)";
import { DEFAULT_LOCATION } from "../(utils)/constants";

export class FilterServiceBuilder {
  constructor(private content: Property[]) {
    this.content = [...content];
  }

  byLocation(location: string) {
    if (location !== DEFAULT_LOCATION)
      this.content = this.content.filter(
        (value) => value.location === location
      );
    return this;
  }

  bySuperhost(superhost: boolean) {
    if (superhost)
      this.content = this.content.filter((value) => value.superhost);
    return this;
  }

  byPropertyType(quantity: number) {
    if (quantity > 0)
      this.content = this.content.filter(
        (value) => value.capacity.bedroom === quantity
      );
    return this;
  }

  build() {
    return this.content;
  }
}
