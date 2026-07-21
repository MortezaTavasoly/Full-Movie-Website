export type InputVariant =
  | "primary"
  | "error"
  | "success"
  | "warning"
  | "black"
  | "white";
export type InputType = "password" | "text" | "email" | "number";

export type TInputProps = {
  // Styling & Appearance
  variant?: InputVariant;
  className?: string;

  // Content & Labels
  label?: string;
  placeholder?: string;
  hint?: string;

  // State & Validation
  value?: string;
  error?: boolean | string;
  disabled?: boolean;

  // Input Properties
  type?: InputType;
  name: string;
  maxLength?: number;
  minLength?: number;
  autoComplete?: string;

  // Features
  clear?: boolean;
  required?: boolean;

  // Events
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onFocus?: (event: React.FocusEvent<HTMLInputElement>) => void;
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
  onClear?: () => void;
};
