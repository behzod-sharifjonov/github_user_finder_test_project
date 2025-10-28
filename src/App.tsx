import { Provider } from "react-redux";
import { ThemeProvider, CssBaseline, Container } from "@mui/material";
import { store } from "./app/store";
import { theme } from "./theme/theme"
import HomePage from "./views/Home/Home";

const App = () => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Container maxWidth="md" sx={{ mt: 5 }}>
          <HomePage />
        </Container>
      </ThemeProvider>
    </Provider>
  );
};

export default App;
