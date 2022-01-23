import Home from "./pages/Home";
import Navigation from "./utils/Navigation/Navigation";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

const theme = createTheme({
  palette: {
    primary: {
      main: '#6ddee0',
      mainGradient: 'linear-gradient(315deg, #2a2a72 0%, #009ffd 74%)',
    },
    secondary: {
      main: '#051124',
    },
    background: {
      main: '#051124',
    },
    text: {
      title: '#dce3fc',
      main: '#c5cff0',
    },
    white: {
      main: '#FFFFFF',
    },
  },
  typography: {
    useNextVariants: true
  }
});

const App = () => {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
