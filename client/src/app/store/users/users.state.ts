export interface IUsersState {
  userRegistered: boolean;
  userAuthenticated: boolean;
  token: boolean;
  username: string;
  allUsers: Array<object>;
}

export const initialState: IUsersState = {
  userRegistered: false,
  userAuthenticated: false,
  token: null,
  username: null,
  allUsers: []
};
