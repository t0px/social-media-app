import Navbar from "./components/Navbar";
import Rightbar from "./components/Rightbar";
import Feed from "./components/Feed";
import Sidebar from "./components/Sidebar";
import { Box, createTheme } from "@mui/material";
import { Stack } from "@mui/material";
import Add from "./components/Add";
import { useState } from "react";
import { ThemeProvider } from "@emotion/react";

function App() {

    const [mode, setMode] = useState("light");

    const darkTheme = createTheme({
        palette: {
            mode: mode
        }
    })

  return (
    <ThemeProvider theme={darkTheme}>
      <Box bgcolor={"background.default"} color={"text.primary"}>
        <Navbar mode={mode}/>
        <Stack direction="row" spacing={2} justifyContent="space-between">
          <Sidebar mode={mode} setMode={setMode}/>
          <Feed />
          <Rightbar />
        </Stack>
        <Add />
      </Box>
    </ThemeProvider>
  );
}

export default App;
