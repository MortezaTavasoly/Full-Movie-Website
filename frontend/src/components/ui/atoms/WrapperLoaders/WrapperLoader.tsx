import type { LoaderWrapperProps } from "./types";

const WrapperLoader = ({
  shape = "circular",
  size = "medium",
  variant = "primary",
  className = "",
}: LoaderWrapperProps) => {
  const loaderSizeIdentifier = () => {
    switch (size) {
      case "small":
        return "w-3 h-3 !border-2";
      case "medium":
        return "w-5 h-5 !border-3";
      case "large":
        return "w-7 h-7 !border-4";
      case "full":
        return shape !== "circular"
          ? "w-full h-full !border-4"
          : "w-7 h-7 !border-4";
    }
  };
  const varientIdentifier = () => {
    switch (variant) {
      case "primary":
        return "!border-t-[var(--theme-primary-500)] !border-[var(--theme-primary-100)] ";
      case "success":
        return "!border-t-[var(--theme-success-600)] !border-[var(--theme-success-100)] ";
      case "warning":
        return "!border-t-[var(--theme-warning-500)] !border-[var(--theme-primary-100)] ";
      case "error":
        return "!border-t-[var(--theme-error-400)] !border-[var(--theme-error-50)] ";
      case "black":
        return "!border-t-[var(--theme-primary-500)] !border-[var(--theme-primary-100)] ";
    }
  };

  return (
    <>
      {shape === "circular" && (
        <div
          className={`!rounded-full animate-spin ${loaderSizeIdentifier()} ${varientIdentifier()} ${className}`}
        />
      )}
      {shape === "bar" && (
        <div
          className={`!rounded-full animate-spin ${loaderSizeIdentifier()} ${varientIdentifier()} ${className}`}
        />
      )}
      {shape === "dots" && (
        <div
          className={`!rounded-full animate-spin ${loaderSizeIdentifier()} ${varientIdentifier()} ${className}`}
        />
      )}
    </>
  );
};

export default WrapperLoader;
