export interface IPostState {
  content: string;
  posts: Array<object>;
}

export const initialState: IPostState = {
  content: '',
  posts: []
};
