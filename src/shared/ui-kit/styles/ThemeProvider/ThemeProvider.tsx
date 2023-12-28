import { ThemeProvider as MUIThemeProvider } from '@mui/material/styles';
import { type Theme } from '../Theme';

interface ThemeProviderProps {
  children?: React.ReactNode;
  theme: Theme;
}

const ThemeProvider: React.FC<ThemeProviderProps> = ({
  children,
  theme,
}) => (
  <MUIThemeProvider theme={theme}>
    {children}
  </MUIThemeProvider>
);

export default ThemeProvider;
