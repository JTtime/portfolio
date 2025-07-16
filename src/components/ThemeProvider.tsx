import { createTheme, ThemeProvider as MUIThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useMemo, useState, createContext, useContext } from 'react';
import darkThemeConfig from '../theme/dark';
import lightThemeConfig from '../theme/light';

const ColorModeContext = createContext({ toggleColorMode: () => {} });
export const useColorMode = () => useContext(ColorModeContext);

export function ThemeProvider({ children }) {
  const prefersDark = useMediaQuery('(prefers-color-scheme: dark)');
  const [mode, setMode] = useState(prefersDark ? 'dark' : 'light');

  const toggleColorMode = () => setMode((prev) => (prev === 'light' ? 'dark' : 'light'));
  const theme = useMemo(() => createTheme(mode === 'dark' ? darkThemeConfig : lightThemeConfig), [mode]);

  return (
    <ColorModeContext.Provider value={{ toggleColorMode }}>
      <MUIThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </MUIThemeProvider>
    </ColorModeContext.Provider>
  );
}