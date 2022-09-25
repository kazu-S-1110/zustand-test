import React, { useState } from "react";

export const FugaPresenter = (): { count: number; decrement: () => void } => {
  const [count, setCount] = useState(0);
  const decrement = () => setCount(() => count - 1);

  return {
    count,
    decrement,
  };
};
