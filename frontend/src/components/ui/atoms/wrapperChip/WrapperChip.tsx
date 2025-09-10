import { useMemo } from "react";
import type { TWrapperChipProps } from "./types";

const WrapperChip: React.FC<TWrapperChipProps> = ({
  text,
  varient = "primary",
  type = "filled",
  size = "medium",
  clickable,
  disabled = false,
}) => {
  const getDefaultClassNames = () => {
    if (!disabled) {
      switch (varient) {
        case "primary":
          if (type === "filled") {
            return "text-[var(--theme-primary-700)] !bg-[var(--theme-primary-400)] !border-1 !border-[var(--theme-primary-500)]";
          } else {
            return "text-[var(--theme-primary-550)] !border-1 text-[var(--theme-primary-500)] !border-[var(--theme-primary-600)]";
          }
        case "secondary":
          if (type === "filled") {
            return "text-[var(--theme-secondary-600)] !bg-[var(--theme-secondary-200)] !border-1 !border-[var(--theme-secondary-300)]";
          } else {
            return "!border-1  text-[var(--theme-secondary-400)] !border-[var(--theme-secondary-400)]";
          }
        case "success":
          if (type === "filled") {
            return "text-[var(--theme-success-600)] !bg-[var(--theme-success-200)] !border-1 !border-[var(--theme-success-500)]";
          } else {
            return "!border-1  text-[var(--theme-success-600)] !border-[var(--theme-success-500)]";
          }
        case "warning":
          if (type === "filled") {
            return "text-[var(--theme-warning-700)] !bg-[var(--theme-warning-300)] !border-1 !border-[var(--theme-warning-400)]";
          } else {
            return "!border-1  text-[var(--theme-warning-600)] !border-[var(--theme-warning-500)]";
          }
        case "error":
          if (type === "filled") {
            return "text-[var(--theme-error-400)] !bg-[var(--theme-error-100)] !border-1 !border-[var(--theme-error-200)]";
          } else {
            return "!border-1  text-[var(--theme-error-500)] !border-[var(--theme-error-400)]";
          }
        case "black":
          if (type === "filled") {
            return "text-[var(--theme-gray-700)] !bg-[var(--theme-gray-300)] !border-1 !border-[var(--theme-gray-400)]";
          } else {
            return "!border-1  text-[var(--theme-gray-600)] !border-[var(--theme-gray-500)]";
          }
      }
    } else {
      if (type === "filled") {
        return "text-[var(--theme-gray-400)] !bg-[var(--theme-gray-100)] !border-1 !border-[var(--theme-gray-200)] cursor-not-allowed blur-[0.6px]";
      } else {
        return "!border-1  text-[var(--theme-gray-400)] !border-[var(--theme-gray-200)] cursor-not-allowed";
      }
    }
  };

  const defaultClassNames = useMemo(() => getDefaultClassNames(), [type]);

  return (
    <span
      className={`${defaultClassNames} ${
        size === "small"
          ? "text-[0.8rem] !px-2 rounded-md"
          : "text-[1rem] !px-2 rounded-lg"
      } ${clickable && "!cursor-pinter"} w-fit h-fit`}
    >
      {text}
    </span>
  );
};

export default WrapperChip;
