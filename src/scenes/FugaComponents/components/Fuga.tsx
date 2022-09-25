import React from "react";
import { DisplayCount } from "../../../components/DisplayCount";
import { FugaPresenter } from "../domain/FugaPresenter";

export const Fuga = () => {
  const { count, decrement } = FugaPresenter();

  return <DisplayCount label="Fuga" count={count} onUpdate={decrement} />;
};
