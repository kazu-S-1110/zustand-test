import React, { FC } from "react";
import { StoreApi } from "zustand";
import createContext from "zustand/context";
import { DisplayCount } from "../../../components/DisplayCount";
import { CountState, useCountStore } from "../../../context/store";
import { HogePresenter } from "../domain/HogePresenter";

export const ZustandComponent = () => {
  const { count, increment, resetCount } = useCountStore();

  return (
    <DisplayCount
      label="this is zustandState"
      count={count}
      onUpdate={increment}
      onReset={resetCount}
    />
  );
};
