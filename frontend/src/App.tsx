import { ThemeProvider } from "@mui/material/styles";
import { RouterProvider } from "react-router-dom";
import { muiTheme } from "./muiConfig";
import { routes } from "./routes";

export const App = () => {
  return (
    <ThemeProvider theme={muiTheme}>
      <RouterProvider router={routes} />
    </ThemeProvider>
  );
}