import { Button } from "@mui/material";
import { Stack } from "@mui/system";
import { useState } from "react";
import create from "zustand";
import "./App.css";

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
        {count}
        <Button variant="contained" onClick={() => increment()}>
          increment
        </Button>
      </Stack>
    </div>
  );
}

export default App;
