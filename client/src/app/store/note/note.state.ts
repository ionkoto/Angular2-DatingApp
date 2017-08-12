export interface INoteState {
  content: string;
  posts: Array<object>
}

export const initialState: INoteState = {
  content: '',
  posts: []
};
