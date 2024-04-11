
export type TodoTypes = "ADD_COUNT" | "CHANGE_NAME" | "ADD_TO_LIST";

type Action<T> = {
  type: TodoTypes;
  payload: T;
};

interface IAddCount extends Action<void> {
  type: "ADD_COUNT";
}

interface IChangeName extends Action<string> {
  type: "CHANGE_NAME";
}

interface IAddToList extends Action<string> {
  type: "ADD_TO_LIST";
}

export type TAction = IAddCount | IChangeName | IAddToList;
