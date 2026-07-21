export interface TWrapperChipProps {
  text: string;
  size?: TSize;
  varient?: TVarient;
  shape?: TShape;
  type?: TType;
  clickable?: boolean;
  disabled?: boolean;
  children?: React.ReactNode;
  className?: string;
}

type TSize = "medium" | "small";
type TType = "outlined" | "filled";
type TShape = "rounded" | "regular";
type TVarient =
  | "primary"
  | "secondary"
  | "success"
  | "warning"
  | "error"
  | "black";
