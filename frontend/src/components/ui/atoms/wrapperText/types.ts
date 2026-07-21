// types.ts
import type { JSX } from "react";

export type Tags = keyof JSX.IntrinsicElements;

export interface TextWrapperProps {
  text: string | number;
  as?: Tags;
  className?: string;
  type?: THeadline | TTitle | TBody | TCaption;
  children?: React.ReactNode;
}
export type THeadline = {
  name: "heading";
  level: 1 | 2 | 3 | 4;
  weight?: "bold" | "medium" | "regular";
};

export type TTitle = {
  name?: "title";
  level: 1 | 2 | 3;
  weight?: "bold" | "medium" | "regular";
};

export type TBody = {
  name: "body";
  level: 1 | 2 | 3;
  weight?: "bold" | "medium" | "regular" | "light";
};

export type TCaption = {
  name: "caption";
  level: 1 | 2;
  weight?: "bold" | "medium" | "regular" | "light";
};
