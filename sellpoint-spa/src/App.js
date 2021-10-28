import { createTheme, ThemeProvider } from '@mui/material/styles';
import Container from './View/Pages/Container/Container';

const theme = createTheme();

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Container />
    </ThemeProvider>
  );
}

export default App;
