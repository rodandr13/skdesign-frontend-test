"use client";

import { ReactNode } from "react";

import { Provider } from "react-redux";

import { appStore } from "../appStore";

export const StoreProvider = ({ children }: { children: ReactNode }) => {
  return <Provider store={appStore}>{children}</Provider>;
};
