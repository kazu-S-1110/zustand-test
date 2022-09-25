import { Button } from "@mui/material";
import { Stack } from "@mui/system";
import { useState } from "react";
import create from "zustand";
import "./App.css";
import { DisplayCount } from "./components/DisplayCount";
import { Fuga } from "./scenes/FugaComponents/components/Fuga";
import { Hoge } from "./scenes/HogeComponents/components/Hoge";

interface CountState {
  count: number;
  increment: () => void;
}

const useCountStore = create<CountState>((set) => ({
  count: 0,
  increment: () => set((state) => ({ count: state.count + 1 })),
}));

function App() {
  const { count, increment } = useCountStore();

  return (
    <div className="App">
      <Stack spacing={5}>
        <Hoge />
        <Fuga />
      </Stack>
    </div>
  );
}

export default App;
