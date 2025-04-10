import { DefaultTheme } from "styled-components";
import { 
  ButtonSizeProps,
} from "../../components/Button.styles";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      primary: string;
      secondary: string;
      danger: string;
      success: string;
      warning: string;
      info: string;
    };
    sizes: {
      [key in ButtonSizeProps]: { padding: string; fontSize: string };
    };
    borderRadius: string;
    boxShadow: string;
    transition: string;
    fonts: {
      fontFamily: string;
      fontSize: string;
      fontWeight: string;
    };
    disabled: {
      backgroundColor: string;
      cursor: string;
    };
    hover: {
      opacity: string;
      boxShadow: string;
    };
  }
}

export const defaultTheme: DefaultTheme = {
  colors: {
    primary: "#007bff",
    secondary: "#6c757d",
    danger: "#dc3545",
    success: "#28a745",
    warning: "#ffc107",
    info: "#17a2b8",
  },
  fonts: {
    fontFamily: "Arial, sans-serif",
    fontSize: "16px",
    fontWeight: "400",
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
