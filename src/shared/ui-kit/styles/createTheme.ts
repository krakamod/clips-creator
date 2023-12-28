import { createTheme as createMUITheme } from '@mui/material/styles';
import { type Theme } from './Theme';

const createTheme = (): Theme => createMUITheme({
  palette: {
    primary: {
      main: '#2237FF',
    },
    text: {
      primary: '#191C26',
      secondary: 'rgba(25, 28, 38, 0.70)',
    },
    divider: '#E1E1E1',
  },
  typography: {
    fontFamily: '"Manrope", sans-serif',
    h4: {
      fontSize: '1.25rem',
      fontWeight: 600,
      lineHeight: 1.1,
    },
    h5: {
      fontSize: '1.125rem',
      fontWeight: 600,
      lineHeight: 1.222,
    },
    body1: {
      fontSize: '0.875rem',
      fontWeight: 400,
      lineHeight: 1.429,
    },
    body2: {
      fontSize: '0.75rem',
      fontWeight: 500,
      lineHeight: 1.429,
    },
    button: {
      fontSize: '0.875rem',
      fontWeight: 600,
      textTransform: 'none',
    },
  },
  shape: {
    borderRadius: 8,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          padding: '2.75px 24px',
        },
      },
    },
    MuiTabs: {
      styleOverrides: {
        flexContainer: {
          position: 'relative',
        },
        indicator: {
          left: 0,
          right: 'auto',
        },
      },
    },
    MuiTab: {
      styleOverrides: {
        root: {
          fontWeight: 400,
          color: '#000000',
          '&.Mui-selected': {
            fontWeight: 600,
          },
          alignItems: 'flex-start',
          padding: '8px 20px',
          marginTop: 6,
          marginBottom: 6,
          minHeight: 40,
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          minWidth: 155,
          padding: 0,
          '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
            borderWidth: 1,
          },
        },
        input: {
          padding: '7px 12px',
          fontSize: 13,
          fontWeight: 600,
          height: '1.385em',
          '&::placeholder': {
            fontWeight: 400,
            color: 'rgba(25, 28, 38, 0.40)',
          },
        },
        notchedOutline: {
          borderColor: '#EBEBEB',
        },
      },
    },
    MuiSvgIcon: {
      styleOverrides: {
        fontSizeMedium: {
          fontSize: '1rem',
        },
      },
    },
    MuiSelect: {
      styleOverrides: {
        icon: {
          fontSize: '1.3rem',
          color: '#3B4154',
        },
      },
    },
  },
});

export default createTheme;
