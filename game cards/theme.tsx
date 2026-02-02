import { createTheme } from '@mui/material'

// Define a custom dark theme for the modern look
const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      // Vibrant pink/red accent color
      main: '#E95280', 
    },
    background: {
      // Very dark background for the page
      default: '#0A0A0A', 
      // Slightly lighter dark color for card backgrounds
      paper: '#1C1C1E', 
    },
    text: {
      primary: '#E0E0E0',
      secondary: '#A0A0A0',
    },
  },
  typography: {
    fontFamily: ['"Inter"', 'sans-serif'].join(','),
  },
  components: {
    MuiButton: {
      defaultProps: {
        disableElevation: true,
      },
      styleOverrides: {
        root: {
          textTransform: 'none',
          borderRadius: 8,
          transition: 'background-color 0.2s, transform 0.1s',
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: ({ theme }) => ({
          borderRadius: theme.spacing(1.5), // 12px
        }),
      },
    },
  },
})

export default theme