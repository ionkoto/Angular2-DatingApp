export interface IUsersState {
  userRegistered: boolean;
  userAuthenticated: boolean;
  token: boolean;
  user: {
    id: string,
    username: string,
    roles: string[]
  }
}

export const initialState: IUsersState = {
  userRegistered: false,
  userAuthenticated: false,
  token: null,
  user: {
    id: null,
    username: null,
    roles: []
  }
};
