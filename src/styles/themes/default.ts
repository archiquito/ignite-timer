// This file contains the default theme configuration for the application.
// It defines the colors, fonts, sizes, and other styles used throughout the app.
export const defaultTheme = {
  white: "#FFF",
  "gray-100": "#E1E1E6",
  "gray-300": "#C4C4CC",
  "gray-400": "#8D8D99",
  "gray-500": "#7C7C8A",
  "gray-600": "#323238",
  "gray-700": "#29292E",
  "gray-800": "#202024",
  "gray-900": "#121214",

  "green-300": "#00B37E",
  "green-500": "#00875F",
  "green-700": "#015F43",

  "red-500": "#AB222E",
  "red-700": "#7A1921",

  "yellow-500": "#FBA94C",
  defaultColors: {
    primary: "#00875F",
    secondary: "#00B37E",
    danger: "#7A1921",
    success: "#015F43",
    warning: "#FBA94C",
    info: "#17a2b8",
  },
  sizes: {
    small: { padding: "5px 10px", fontSize: "12px" },
    medium: { padding: "10px 20px", fontSize: "16px" },
    large: { padding: "15px 30px", fontSize: "20px" },
  },
  borderRadius: "4px",
  boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
  transition: "background-color 0.3s ease, box-shadow 0.3s ease",
  hover: { opacity: "0.8", boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)" },
  disabled: { backgroundColor: "#cccccc", cursor: "not-allowed" },
};
