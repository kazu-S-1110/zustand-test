import React from "react";
import { DisplayCount } from "../../../components/DisplayCount";
import { HogePresenter } from "../domain/HogePresenter";

export const Hoge = () => {
  const { count, increment } = HogePresenter();

  return <DisplayCount label="Hoge" count={count} onUpdate={increment} />;
};
