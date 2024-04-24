"use client";

import React, { FC, useReducer } from "react";

import Context from "./context";
import { initialState } from "./initialState";
import reducer from "./reducer";

const WeatherProvider: FC<{ children: React.ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <Context.Provider value={{ state, dispatch }}>{children}</Context.Provider>
  );
};
export default WeatherProvider;
