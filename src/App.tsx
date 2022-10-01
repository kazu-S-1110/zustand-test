import { Button } from "@mui/material";
import { Stack } from "@mui/system";
import "./App.css";
import createContext from "zustand/context";
import { Fuga } from "./scenes/FugaComponents/components/Fuga";
import { Hoge } from "./scenes/HogeComponents/components/Hoge";
import { CountState, useCountStore } from "./context/store";

const { Provider, useStore } = createContext();

function App() {
  return (
    <div className="App">
      <Stack spacing={5}>
        <Provider createStore={useCountStore}>
          <Hoge />
        </Provider>
        <Fuga />
      </Stack>
    </div>
  );
}

export default App;
