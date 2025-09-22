import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#000000",
      contrastText: "#ffffff",
    },
    secondary: {
      main: "#666666",
      contrastText: "#ffffff",
    },
    background: {
      default: "#FFFFFF",
      paper: "#FFFFFF",
    },
    text: {
      primary: "#000000",
      secondary: "#666666",
    },
    grey: {
      50: "#FAFAFA",
      100: "#F5F5F5",
      200: "#EEEEEE",
      300: "#E0E0E0",
      400: "#BDBDBD",
      500: "#9E9E9E",
      600: "#757575",
      700: "#616161",
      800: "#424242",
      900: "#212121",
    },
  },
  typography: {
    fontFamily:
      '-apple-system, BlinkMacSystemFont, "SF Pro Display", "SF Pro Text", "Helvetica Neue", Helvetica, Arial, sans-serif',
    h1: {
      fontSize: "3.5rem",
      fontWeight: 600,
      lineHeight: 1.1,
      letterSpacing: "-0.03em",
      color: "#000000",
    },
    h2: {
      fontSize: "2.5rem",
      fontWeight: 600,
      lineHeight: 1.2,
      letterSpacing: "-0.02em",
      color: "#000000",
    },
    h3: {
      fontSize: "1.75rem",
      fontWeight: 600,
      lineHeight: 1.3,
      letterSpacing: "-0.01em",
      color: "#000000",
    },
    h4: {
      fontSize: "1.25rem",
      fontWeight: 500,
      lineHeight: 1.4,
      color: "#000000",
    },
    h5: {
      fontSize: "1.125rem",
      fontWeight: 500,
      lineHeight: 1.4,
      color: "#000000",
    },
    h6: {
      fontSize: "1rem",
      fontWeight: 600,
      lineHeight: 1.4,
      color: "#000000",
    },
    body1: {
      fontSize: "1.125rem",
      lineHeight: 1.6,
      color: "#666666",
      fontWeight: 400,
    },
    body2: {
      fontSize: "1rem",
      lineHeight: 1.5,
      color: "#666666",
      fontWeight: 400,
    },
    button: {
      textTransform: "none",
      fontWeight: 500,
      fontSize: "1rem",
    },
  },
  spacing: 8,
  shape: {
    borderRadius: 12,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          padding: "12px 24px",
          fontSize: "1rem",
          fontWeight: 500,
          transition: "all 0.2s ease-in-out",
        },
        contained: {
          backgroundColor: "#000000",
          color: "#FFFFFF",
          boxShadow: "none",
          "&:hover": {
            backgroundColor: "#333333",
            boxShadow: "0 4px 12px rgba(0, 0, 0, 0.3)",
          },
        },
        outlined: {
          borderColor: "#E0E0E0",
          borderWidth: "1px",
          color: "#000000",
          backgroundColor: "transparent",
          "&:hover": {
            borderColor: "#000000",
            backgroundColor: "rgba(0, 0, 0, 0.05)",
            borderWidth: "1px",
          },
        },
        text: {
          color: "#000000",
          "&:hover": {
            backgroundColor: "rgba(0, 0, 0, 0.05)",
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundColor: "#FFFFFF",
          border: "none",
          borderRadius: 16,
          boxShadow: "0 2px 16px rgba(0, 0, 0, 0.08)",
          transition: "all 0.2s ease-in-out",
          "&:hover": {
            boxShadow: "0 8px 32px rgba(0, 0, 0, 0.12)",
            transform: "translateY(-2px)",
          },
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: "rgba(255, 255, 255, 0.8)",
          backdropFilter: "blur(20px)",
          boxShadow: "0 1px 0 rgba(0, 0, 0, 0.1)",
          borderBottom: "none",
        },
      },
    },
    MuiContainer: {
      styleOverrides: {
        root: {
          paddingLeft: "24px",
          paddingRight: "24px",
          "@media (min-width: 1200px)": {
            maxWidth: "1200px",
          },
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          "&.MuiTypography-h1, &.MuiTypography-h2, &.MuiTypography-h3": {
            fontWeight: 600,
          },
        },
      },
    },
  },
});

export default theme;
