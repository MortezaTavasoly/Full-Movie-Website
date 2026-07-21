export interface ButtonWrapperProps {
  text?: string;
  loading?: boolean;
  size?: "xLarge" | "large" | "medium" | "small";
  type?: "default" | "outlined" | "text";
  shape?: "default" | "rounded";
  icon?: boolean;
  disabled?: boolean;
  variant?: "primary" | "error" | "success" | "warning" | "black";
  className?: string;
  children?: React.ReactNode;
  onClick?: () => void;
}
