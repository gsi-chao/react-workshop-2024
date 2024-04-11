"use client";

import { Dispatch, createContext } from "react";
import { TAction } from "./actions";
import { GlobalState, initialState } from "./initialState";

interface IContextProps {
  state: GlobalState;
  dispatch: Dispatch<TAction>;
}
const GlobalContext = createContext<IContextProps>({
  state: initialState,
  dispatch: () => {},
});
export default GlobalContext;
