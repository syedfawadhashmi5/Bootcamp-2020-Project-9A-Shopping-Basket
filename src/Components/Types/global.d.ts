export interface productType {
  _productId: number;
  name: string;
  price: number;
  description: string;
  image: string;
  quantity: number;
}

export interface cartType {
  _productId: number;
  name: string;
  price: number;
  description: string;
  image: string;
  quantity: number;
}

export interface stateType {
  cart: cartType[];
}