import { Stack } from "@mui/system";
import "./App.css";
import { Fuga } from "./scenes/FugaComponents/components/Fuga";
import { ZustandComponent } from "./scenes/ZustandComponents/components/ZustandComponent";

function App() {
  return (
    <div className="App">
      <Stack spacing={5}>
        <ZustandComponent />
        <Fuga />
        hogehoge
      </Stack>
    </div>
  );
}

export default App;
