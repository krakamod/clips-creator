import { createTheme as createMUITheme } from '@mui/material/styles';
import { type Theme, type ThemeOptions } from './Theme';

const createTheme = (): Theme => {
  const custom: ThemeOptions = {
    typography: {
      fontFamily: '"Manrope", sans-serif',
    },
  };

  return createMUITheme(custom);
};

export default createTheme;
