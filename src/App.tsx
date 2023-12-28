import { ThemeProvider, createTheme } from '@mui/material/styles';
import AppRoutes from './Routes';

import './App.css';

function App() {
  const theme = createTheme({
    direction: 'rtl',
    // other theme properties
  });
  return (
    <ThemeProvider theme={theme}>
      <AppRoutes />
    </ThemeProvider>
  );
}

export default App;
