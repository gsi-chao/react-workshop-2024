import { createContext } from "react";
import { GlobalState, initialState } from "./initialState";

export const GlobalContext = createContext<GlobalState>(initialState);
