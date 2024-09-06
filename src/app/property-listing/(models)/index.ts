export interface Capacity {
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

export interface FilterContext {
  filteredContent: Property[];
  currentLocation: string;
  bySuperhost: boolean;
  bedroomType: number;
  handleBedroomType: (type: string) => void;
  handleLocation: (location: string) => void;
  handleSuperhost: () => void;
}
