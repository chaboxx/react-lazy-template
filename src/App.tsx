import { ThemeProvider, CssBaseline } from "@mui/material";
import { theme } from "@shared/theme/theme";

import { AppRoutes } from "./routes/AppRoutes";

export const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppRoutes />
    </ThemeProvider>
  );
};
