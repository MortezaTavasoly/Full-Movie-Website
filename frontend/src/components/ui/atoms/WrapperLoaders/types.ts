export interface LoaderWrapperProps {
  shape?: TShape;
  size?: TSize;
  variant?: TVariant;
  className?: string;
}

export type TShape = "circular" | "bar" | "dots";
export type TSize = "full" | "large" | "medium" | "small";
export type TVariant = "primary" | "error" | "success" | "warning" | "black";
