import React from "react";
import create from "zustand";

export interface CountState {
  count: number;
  increment: () => void;
  resetCount: () => void;
}

export const useCountStore = create<CountState>((set) => ({
  count: 0,
  increment: () => set((state) => ({ count: state.count + 1 })),
  resetCount: () => set({ count: 0 }),
}));
