export type GlobalState = {
  count: number;
  name: string;
  list: string[];
};

export const initialState: GlobalState = {
  count: 0,
  name: "John",
  list: ["apple", "banana", "cherry"],
};
