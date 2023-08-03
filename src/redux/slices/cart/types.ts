export interface CartItemType {
  title: string;
  imageUrl: string;
  type: string;
  size: number;
  count: number;
  price: number;
  id: string;
}
export interface IcartSlice {
  totalPrice: number;
  items: CartItemType[];
}
