import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import { ThemeProvider, createTheme } from '@mui/material/styles'; 

const theme = createTheme({
  palette: {
     primary: {
        main: '#6ddee0',
        mainGradient: 'linear-gradient(315deg, #2a2a72 0%, #009ffd 74%)',
     },
     secondary: {
       main: '#020C1B',
     },
     gray: {
      main: '#B3B3B3',
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
    <ThemeProvider theme = { theme }>
        <Navbar/>
        <Home />
        </ThemeProvider>
  );
}

export default App;
