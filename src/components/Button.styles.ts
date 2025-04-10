import styled from "styled-components";

export type ButtonColorProps =
  | "primary"
  | "secondary"
  | "danger"
  | "success"
  | "warning"
  | "info";
export type ButtonSizeProps = "small" | "medium" | "large";

interface ButtonStylesProps {
  color?: ButtonColorProps;
  size?: ButtonSizeProps;
  disabled?: boolean;
  hover?: {
    opacity: string;
    boxShadow: string;
  };
}

export const ButtonStyles = styled.button<ButtonStylesProps>`
  background-color: ${(props) =>
    props.theme.colors?.[props.color ?? "primary"]};

  ${(props) => props.theme.sizes?.[props.size ?? "medium"]};
  color: white;
  border: none;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  margin: 4px 2px;
  cursor: pointer;
  border-radius: 4px;

  &:hover:not([disabled]) {
    ${(props) => props.theme.hover};
  }

  &:disabled {
    ${(props) => props.theme.disabled};
  }
`;
