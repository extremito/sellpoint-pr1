import { createTheme, ThemeProvider } from '@mui/material/styles';
import Login from './View/Pages/Login/Login';

const theme = createTheme();

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Login />
    </ThemeProvider>
  );
}

export default App;
