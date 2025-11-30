export type ProductCategory = 'cars' | 'parts' | 'accessories' | 'maintenance';

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  category: ProductCategory;
  image: string;
  images: string[];
  inStock: boolean;
  featured?: boolean;
  specs?: {
    [key: string]: string;
  };
}
