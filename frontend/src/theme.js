import { createTheme, responsiveFontSizes } from "@mui/material/styles";

// Create a theme instance.
let theme = createTheme({
  components: {
    MuiButton: {
      defaultProps: {
        disableElevation: true,
      },
      styleOverrides: {
        root: {
          textTransform: "none",
          borderRadius: "8px",
        },
        text: {
          padding: "8px 12px",
        },
        contained: {
          padding: "10px 20px",
        },
        outlined: {
          padding: "6px 12px",
        },
        startIcon: {
          "&>*:nth-of-type(1)": {
            fontSize: "1.5rem",
          },
        },
        endIcon: {
          "&>*:nth-of-type(1)": {
            fontSize: "1.5rem",
          },
        },
      },
    },

    MuiStack: {
      defaultProps: {
        useFlexGap: true,
      },
    },
  },

  palette: {
    mode: "light",

    primary: {
      main: "#131118",
    },

    brand: {
      gray_50: "rgb(255, 255, 255)",
      gray_100: "rgb(243, 243, 243)",
      gray_200: "rgb(237, 236, 238)",
      gray_500: "rgb(164, 161, 170)",

      green: "rgb(60, 209, 57)",
      red: "rgb(255, 111, 118)",
    },
  },

  typography: {
    fontFamily: '"Jost", sans-serif',

    h2: {
      fontWeight: "bold",
    },

    h3: {
      fontSize: "2rem",
    },

    h4: {
      fontWeight: "bold",
    },

    h5: {
      fontSize: "1.875rem",
      fontWeight: "bold",
    },

    subtitle1: {
      fontSize: "1.625rem",
    },
  },
});

theme = responsiveFontSizes(theme);

export default theme;
