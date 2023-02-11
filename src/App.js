import { colorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";

function App() {
  const [theme, colorMode] = useMode()

  return (
    <colorModeContext.Provider value={colorMode}>
      <div className="app">
      </div>
    </colorModeContext.Provider>
  );
}

export default App;
