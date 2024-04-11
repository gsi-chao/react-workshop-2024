import { TAction } from "./actions";
import { GlobalState } from "./initialState";

const reducer = (state: GlobalState, action: TAction): GlobalState => {
  const { type } = action;
  switch (type) {
    case "ADD_COUNT":
      return { ...state, count: state.count + 1 };
    case "CHANGE_NAME":
      return {
        ...state,
        name: action.payload,
      };
    case "ADD_TO_LIST":
      return {
        ...state,
        list: [...state.list, action.payload],
      };
    default:
      return state;
  }
};
export default reducer;
