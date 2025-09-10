export interface TWrapperChipProps {
  text: string;
  size?: TSize;
  varient?: TVarient;
  type?: TType;
  clickable?: boolean;
  disabled?: boolean;
}

type TSize = "medium" | "small";
type TType = "outlined" | "filled";
type TVarient =
  | "primary"
  | "secondary"
  | "success"
  | "warning"
  | "error"
  | "black";
