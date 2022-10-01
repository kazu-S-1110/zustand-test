import React, { FC } from "react";
import { StoreApi } from "zustand";
import createContext from "zustand/context";
import { DisplayCount } from "../../../components/DisplayCount";
import { CountState, useCountStore } from "../../../context/store";
import { HogePresenter } from "../domain/HogePresenter";

const { useStore } = createContext();

export const Hoge = () => {
  const { count, increment } = HogePresenter();
  const state = useStore(useCountStore);

  return <DisplayCount label="Hoge" count={count} onUpdate={increment} />;
};
