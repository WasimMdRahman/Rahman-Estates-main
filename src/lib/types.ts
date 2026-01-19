export interface Property {
  id: string;
  title: string;
  description: string;
  price: number;
  location: string;
  beds: number;
  baths: number;
  sqft: number;
  imageIds: string[];
  features: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  quote: string;
  imageId: string;
}
