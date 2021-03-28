import { ReactNode } from 'react';

export interface ProductType {
  id: string;
  name: string;
  price: number;
  sellingPrice: number;
  imageUrl: string;
  quantity: number;
}

export interface ProductProps {
  product: ProductType;
  updateProductAmount: (product: ProductType, quantity: number) => void;
}

export interface CartProviderProps {
  children: ReactNode;
}
