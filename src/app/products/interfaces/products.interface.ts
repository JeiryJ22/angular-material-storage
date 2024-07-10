export interface Product {
  id:    string;
  name:  string;
  price: string;
  type:  Type;
  info:  string;
  alt_img?:  string;
}

export enum Type {
  Drink = "drink",
  Food = "food",
}
