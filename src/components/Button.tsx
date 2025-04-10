import {
  ButtonStyles,
  ButtonColorProps,
  ButtonSizeProps,
} from "./Button.styles";

interface ButtonProps {
  label?: string;
  onClick?: () => void;
  color?: ButtonColorProps;
  size?: ButtonSizeProps;
  disabled?: boolean;
}
console.log("aaaa")

export function Button({
  label,
  onClick,
  color = "primary",
  size = "medium",
  disabled = false,
}: ButtonProps) {
  return (
    <ButtonStyles color={color} onClick={onClick} size={size} disabled={disabled}>
      {label}
    </ButtonStyles>
  );
}
