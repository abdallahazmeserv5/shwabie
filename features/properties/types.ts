export interface Property {
  id: number;
  name: string;
  slug: string;
  description: string;
  price: string;
  currency: string;
  country: string;
  city: string;
  thumbnail: string;
  is_air_ticket: number;
  gallery: string[];
  extensions: any[];
  features: Feature[];
  average_rating: number;
  reviews: any[];
}

export interface Feature {
  id: number;
  name: string;
  image: string;
}
