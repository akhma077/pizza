export type SortType = {
  name: string;
  sort: 'rating' | 'price' | 'title';
};

export interface IFoodBlockType {
  id: string;
  title: string;
  price: number;
  imageUrl: string;
  types: number[];
  sizes: number[];
}
