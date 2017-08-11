export interface IHomeState {
  totalUsers: number;
  pagedUsers: Object[];
}

export const initialState: IHomeState = {
  totalUsers: null,
  pagedUsers: []
};
