import Home from "./pages/Home";
import Navigation from "./utils/Navigation/Navigation";
import { ThemeProvider, createTheme } from '@mui/material/styles';

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
    <ThemeProvider theme={theme}>
      <Navigation />
      <Home />
    </ThemeProvider>
  );
}

export default App;
