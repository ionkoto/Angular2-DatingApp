import {UserModel} from "./user.model";

export interface IHomeState {
  totalUsers: number;
  pagedUsers: UserModel[];
}

export const initialState: IHomeState = {
  totalUsers: null,
  pagedUsers: []
};
