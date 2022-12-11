import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { ThemeProvider, CssBaseline } from "@mui/material";
import { theme } from "@shared/theme/theme";

import { AppRoutes } from "./routes/AppRoutes";
const queryClient = new QueryClient();

export const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools />
        <AppRoutes />
      </QueryClientProvider>
    </ThemeProvider>
  );
};
