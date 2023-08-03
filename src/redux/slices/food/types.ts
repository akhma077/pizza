import { IFoodBlockType } from 'types/types';
export enum Status {
  LOADING = 'loading',
  SUCCESS = 'success',
  ERROR = 'error',
}

export interface IFoodBlockSlice {
  items: IFoodBlockType[];
  status: Status;
}
