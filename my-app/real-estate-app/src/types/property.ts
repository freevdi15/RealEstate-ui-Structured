export interface Property {
  id: string;
  title: string;
  location: string;
  price: number;
  thumbnail?: string;
  image?: string;
  description?: string;
  beds?: number;
  baths?: number;
  areaSqft?: number;
}
