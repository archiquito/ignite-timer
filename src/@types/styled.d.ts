import "styled-components";
import { defaultTheme } from "../styles/themes/default";
import { ButtonSizeProps } from "../../components/Button.styles";

type ThemeType = typeof defaultTheme;

declare module "styled-components" {
  export interface DefaultTheme extends ThemeType {
    defaultColors: {
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


